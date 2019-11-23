import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  clickMessage = null;
  clickMessageTimeout = null;

  constructor() { }

  ngOnInit() {
  }

  onClickBoy() {
    clearTimeout(this.clickMessageTimeout);
    this.clickMessage = "You clicked Boy.";

    this.clickMessageTimeout = setTimeout(() => { this.clickMessage = null }, 2000);
  }

  onClickGirl() {
    clearTimeout(this.clickMessageTimeout);
    this.clickMessage = "You clicked Girl.";

    this.clickMessageTimeout = setTimeout(() => { this.clickMessage = null }, 2000);
  }

}
