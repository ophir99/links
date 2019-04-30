import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ServicesComponent } from "./services.component";
import { ServicesHomeComponent } from "./services-home/services-home.component";
import { PremiumComponent } from "./services-home/premium/premium.component";
import { SilverComponent } from "./services-home/silver/silver.component";
import { GoldComponent } from "./services-home/gold/gold.component";
import { CloudComponent } from "./cloud/cloud.component";
import { SoftDevComponent } from "./soft-dev/soft-dev.component";
import { MobileDevComponent } from "./mobile-dev/mobile-dev.component";
import { CommonModule } from "@angular/common";
import { ServicesRoutesModule } from "./services-routes.module";

@NgModule({
  declarations: [
    ServicesComponent,
    ServicesHomeComponent,
    PremiumComponent,
    SilverComponent,
    GoldComponent,
    CloudComponent,
    SoftDevComponent,
    MobileDevComponent
  ],
  imports: [CommonModule, ServicesRoutesModule]
})
export class ServicesModule {}
