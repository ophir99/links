import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HeaderComponent } from "./header/header.component";

import { FallbackComponent } from "./fallback/fallback.component";
import { ServicesModule } from "./services/services.module";

import { ProductsModule } from "./products/products.module";

import { AppRoutes } from "./approutes.module";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AchievementsComponent,
    ContactusComponent,
    HeaderComponent,
    FallbackComponent
  ],
  imports: [BrowserModule, ProductsModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
