import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HeaderComponent } from "./header/header.component";

import { RouterModule } from "@angular/router";
import { FallbackComponent } from "./fallback/fallback.component";
import { ServicesHomeComponent } from "./services/services-home/services-home.component";
import { CloudComponent } from "./services/cloud/cloud.component";
import { SoftDevComponent } from "./services/soft-dev/soft-dev.component";
import { MobileDevComponent } from "./services/mobile-dev/mobile-dev.component";
import { PremiumComponent } from "./services/services-home/premium/premium.component";
import { SilverComponent } from "./services/services-home/silver/silver.component";
import { GoldComponent } from "./services/services-home/gold/gold.component";
import { ServicesHomeComponent } from "./services/services-home/services-home.component";
import { SoftDevComponent } from "./services/soft-dev/soft-dev.component";
import { MobileDevComponent } from "./services/mobile-dev/mobile-dev.component";
import { CloudComponent } from "./services/cloud/cloud.component";
import { PremiumComponent } from "./services/services-home/premium/premium.component";
import { SilverComponent } from "./services/services-home/silver/silver.component";
import { GoldComponent } from "./services/services-home/gold/gold.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AchievementsComponent,
    ContactusComponent,
    HeaderComponent,
    FallbackComponent,
    ServicesHomeComponent,
    SoftDevComponent,
    MobileDevComponent,
    CloudComponent,
    PremiumComponent,
    SilverComponent,
    GoldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
        // redirectTo: "contactus",
        // pathMatch: "full"
      },
      {
        path: "services",
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
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "achievements",
        component: AchievementsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
