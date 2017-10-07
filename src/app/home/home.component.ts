import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HomeRequest} from '../request/home.request';
import {BaseService} from '../service/base.service';

declare var google: any;
let me : HomeComponent;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeRequest]
})
export class HomeComponent implements OnInit {

  constructor(private homeRequest: HomeRequest,
    private base: BaseService,
    private router: Router,
    private route: ActivatedRoute) {
    this.base.setPageTitle("");
    me = this;
  }

  slider : {};
  arr1 : {};
  arr2 : {};
  search : any;

  loadeMap(){
            var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
                debugger;
                var address = place.formatted_address;
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
                var mesg = "Address: " + address;
                mesg += "\nLatitude: " + latitude;
                mesg += "\nLongitude: " + longitude;
                me.base.toastSuccess(mesg);
            });
  }

  ngOnInit() {
    this.search = {};
    this.homeRequest.addParam("try","once").addParam("more", "asd").executeGet()
    .then(data=>{
      this.slider = data.slider;
      this.arr1 = data.array[0].data;
      this.arr2 = data.array[1].data;
      console.log("got data", data);
      this.base.load(this.loadeMap, "https://maps.googleapis.com/maps/api/js?key=AIzaSyBA6cI1qPwU1dhL0hHQ2K2veMDC6RvStv4&libraries=places");
    }).catch(err=>{
      console.log("got err", err);
    });
    let subs = this.route.queryParamMap.subscribe(data=>{
      // map the data received with the search filter in the template
      // push the changes to queryParams
      // consume the API with pagination and other stuffs
      let params = data["params"];
      if(Object.keys(params).length == 0) {
        console.log("no params to search");
        return;
      };
      this.pupolateSearchParams(params);
      this.searchAsRequired();
    });
    subs.unsubscribe();
  }

  pupolateSearchParams(params) {
    this.search = Object.assign({}, params);
    this.search.deal = params.deal=="true";
    this.search.recommended = params.recommended=="true";
  }

  searchAsRequired() {
    console.log("searching...", this.search);
    this.router.navigate([''], {queryParams:this.search, replaceUrl:true});
  }

}
