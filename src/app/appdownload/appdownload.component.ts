import { Component, OnInit } from '@angular/core';
import * as MobileDetect from 'mobile-detect';

@Component({
  selector: 'app-appdownload',
  templateUrl: './appdownload.component.html',
  styleUrls: ['./appdownload.component.css']
})
export class AppdownloadComponent implements OnInit {

  play = "https://play.google.com/store/apps/details?id=com.goparties.gpuser&hl=en";
  store = "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1084955093&mt=8";

  constructor() { }

  ngOnInit() {
    location.href = this.play;
    // var md = new MobileDetect(window.navigator.userAgent);
    // console.log(md);
  }

}
