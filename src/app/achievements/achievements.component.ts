import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.scss"]
})
export class AchievementsComponent implements OnInit, OnDestroy {
  url;
  constructor(private router: Router) {
    console.log("FROM CONSTRUCTOR");
  }

  ngOnInit() {
    console.log("FROM ONINIT");
  }

  ngOnDestroy() {
    console.log("FROM ONDESTROY");
  }

  navigate() {
    // this.router.navigate([this.url]);
    this.router.navigateByUrl(this.url);
  }
}
