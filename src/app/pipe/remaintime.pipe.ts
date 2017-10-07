import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'remaintimepipe'})
export class RemainTimePipe implements PipeTransform {
  transform(startdate: number, enddate: number): any {
    if(startdate<1000000000000){
            startdate=startdate*1000;
    }
    if(enddate<1000000000000){
			enddate=enddate*1000;
    }
    var current=new Date().getTime();
    if(startdate<current&&current<enddate)
			return "Ongoing";
		else if(current>=enddate)
            return "Happened";
        else{
            var remain=startdate-current;
			var day=remain/(24*60*60*1000) | 0;
			remain=remain%(24*60*60*1000);
			var hour=remain/(60*60*1000) | 0;
			remain=remain%(60*60*1000);
			var minute=remain%(60*1000);
			minute=minute/1000 | 0;
			var string="";
			if(day>=1){
				string=day+" ";
				if(day==1)
					string+="Day";
				else{
					string+="Days";
				} 

			}
			if(hour>=1){
				string+=" "+hour+" ";
				
				if(hour==1){
					string+="hour ";
				}
				else{
					string+="hours ";
				}

			}
			if(day>=1){
				string+=minute+" Minute";

			}
			return string;
		}

  }
}