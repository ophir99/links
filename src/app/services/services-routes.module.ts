import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { ServicesHomeComponent } from "./services-home/services-home.component";
import { PremiumComponent } from "./services-home/premium/premium.component";
import { SilverComponent } from "./services-home/silver/silver.component";
import { GoldComponent } from "./services-home/gold/gold.component";
import { CloudComponent } from "./cloud/cloud.component";
import { SoftDevComponent } from "./soft-dev/soft-dev.component";
import { MobileDevComponent } from "./mobile-dev/mobile-dev.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: ServicesComponent,
        children: [
          {
            path: "",
            redirectTo: "serviceshome",
            pathMatch: "full"
          },
          {
            path: "serviceshome",
            component: ServicesHomeComponent,
            children: [
              {
                path: "",
                component: PremiumComponent
              },
              {
                path: "silver",
                component: SilverComponent
              },
              {
                path: "gold",
                component: GoldComponent
              }
            ]
          },
          {
            path: "cloud",
            component: CloudComponent
          },
          {
            path: "software",
            component: SoftDevComponent
          },
          {
            path: "mobile",
            component: MobileDevComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ServicesRoutesModule {}
