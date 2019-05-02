import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.scss"]
})
export class AchievementsComponent implements OnInit {
  url;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    // this.router.navigate([this.url]);
    this.router.navigateByUrl(this.url);
  }
}
