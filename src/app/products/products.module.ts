import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { SoftwareComponent } from "./software/software.component";
import { CommonModule } from "@angular/common";
import { ProductsRoutes } from "./products-routes.module";

@NgModule({
  declarations: [ProductsComponent, ProductsHomeComponent, SoftwareComponent],
  imports: [CommonModule, ProductsRoutes]
})
export class ProductsModule {}
