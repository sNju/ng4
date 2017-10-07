import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PartyDetailRequest } from '../request/partydetail.request';
import { GetAppLinkRequest } from '../request/getapplink.request';
import { BaseService } from '../service/base.service';
import { DatePipe } from '@angular/common';

declare var google: any;
declare var $ : any;
let me : PartydetailComponent;

@Component({
  selector: 'app-partydetail',
  templateUrl: './partydetail.component.html',
  styleUrls: ['./partydetail.component.css'],
  providers:[PartyDetailRequest,GetAppLinkRequest]
})
export class PartydetailComponent implements OnInit {

  number: any;
  id: string;
  party: any;
  map: any;
  mobile: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private partyDetails: PartyDetailRequest,
    private base: BaseService,
    private getAppLink : GetAppLinkRequest
  ) {
      me = this;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id");
      this.getDetail();
    });
  }

  loaded(url) {
    $("#lightgallery").lightGallery({
      hash: false,
    });
  }

  getDetail() {
    if(!this.id) {
      return;
    }
    this.partyDetails.addParam("id", this.id)
    .executeGet().then(data=> {
      this.party = data.party;
      console.log(this.party);
      this.render();
      me.base.load(this.loaded, "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.1/js/lightgallery.min.js", 
      "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.1/js/lightgallery-all.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.1/css/lightgallery.min.css");
      me.base.load(me.loadMap, "https://maps.googleapis.com/maps/api/js?key=AIzaSyCndmib6-AIWV1S41wz9hPQE-HsPFsIZo8");
    }).catch(err=> {
      console.log(err);
    });
  }

  loadMap() {
    console.log("got the map");
    debugger;
    let latlng={
      lat:me.party.latitude,
      lng:me.party.longitude
    };
    let map = new google.maps.Map(document.getElementById('partydetail-map'), {
      zoom: 14,
      center: latlng,
      scrollwheel: false,
      disableDoubleClickZoom: false,
      draggable: true
    });

    var marker = new google.maps.Marker({
      position:latlng,
      map: map
    });
    console.log("done");
    
  }

  render() {
    this.base.setPageTitle(this.party.title);
  }

  getLink() {
     if(!this.number) {
      return alert ("something wrong");
    }else{
    this.getAppLink.addParam("number",this.number)
    .executePost().then(data =>{
        this.mobile = data.getapplink;
          alert("succesfully sent");
          this.number=""; 
    }).catch(err =>{
      console.log(err);
    })
    }
  }
}
