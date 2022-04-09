import { Component, OnInit } from '@angular/core';
// ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
// importing a custom service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // By injecting ActivatedRoute, you are configuring the component to use a service.
  // Inject the cart service; will be added to ProductDetailsComponent auto when initialized
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    // grab all the passed params, like req.params we receive in express
    const routeParams = this.route.snapshot.paramMap;
    // now grab the id from that param
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product was successfully added to your cart');
  }
}
