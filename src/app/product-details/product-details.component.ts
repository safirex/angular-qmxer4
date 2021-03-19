import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) {
    const routeParams = route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    //search product from ProductList
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  ngOnInit() {}
}
