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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AchievementsComponent,
    ContactusComponent,
    HeaderComponent,
    FallbackComponent
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
        component: ServicesComponent
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
