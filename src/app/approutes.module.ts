import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FallbackComponent } from "./fallback/fallback.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
        // redirectTo: "contactus",
        // pathMatch: "full"
      },
      {
        path: "achievements",
        component: AchievementsComponent
      },
      {
        path: "services",
        loadChildren: "./services/services.module#ServicesModule"
      },
      {
        path: "contactus",
        component: ContactusComponent
      },
      {
        path: "ourresults",
        redirectTo: "achievements"
      },
      {
        path: "**",
        component: FallbackComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutes {}
