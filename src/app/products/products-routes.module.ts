import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { SoftwareComponent } from "./software/software.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "products",
        component: ProductsComponent,
        children: [
          {
            path: "",
            component: ProductsHomeComponent
          },
          {
            path: "software",
            component: SoftwareComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductsRoutes {}
