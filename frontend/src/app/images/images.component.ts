import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  clickMessage = undefined;
  clickMessageTimeout = undefined;

  onClickBoy() {
    // TODO: Implement logic.
    clearTimeout(this.clickMessageTimeout);
    this.clickMessage = 'You clicked Boy.';

    this.resetClickMessageTimeout();
  }

  onClickGirl() {
    // TODO: Implement logic.
    clearTimeout(this.clickMessageTimeout);
    this.clickMessage = 'You clicked Girl.';

    this.resetClickMessageTimeout();
  }

  public get shouldShowClickMessage(): boolean {
    return this.clickMessage === undefined;
  }

  private resetClickMessageTimeout() {
    this.clickMessageTimeout = setTimeout(() => {
      this.clickMessage = undefined;
    }, 2000);
  }

}
