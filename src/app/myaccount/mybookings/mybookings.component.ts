import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../service/base.service';
import {BookingHistoryRequest} from '../../request/bookingHistory.request';

@Component({
  selector: 'app-profile',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css'],
  providers: [BookingHistoryRequest]
})
export class MyBookingsComponent implements OnInit {

  public status: string = 'upcomming';
  orders: any[] =[];
  past:boolean=false;

  constructor(private base: BaseService, private bookingHistoryRequest :BookingHistoryRequest) {}

  ngOnInit() {
    this.getorders();
  }

  getorders(){
    this.bookingHistoryRequest
    .addParam('id',this.base.currentUser()._key)
    .addParam('target', 'mybooking')
    .executeGet()
    .then(response=>{
        this.orders = response.order;
        this.render();
        console.log('orders',this.orders)
      }).catch(err=>{
        console.log('getting error', err);      
      });
  }

  changestatus(changeStatus){
    this.status=changeStatus;
  }
  redirect(){
    location.href='/delhi-ncr';
  }
  
  download(){
    window.print();
  }


  render() {
    this.base.setPageTitle("My Bookings");
  }

}
