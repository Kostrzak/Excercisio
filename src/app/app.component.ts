import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  exc: ExcerciseReadCard = {
    //imgSrc: "https://i.imgur.com/eWhTVg4.png",
    imgSrc: "https://i.ytimg.com/vi/i6wTUg_tA-A/maxresdefault.jpg",
    name: "Face Pullss"
  };
}

export class ExcerciseReadCard {
  name: string;
  imgSrc: string;
  tags?: Tag[];
  constructor() {
    this.tags = [];
  }
}

export class Tag {
  name: string;
}
