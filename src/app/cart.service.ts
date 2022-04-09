import { Injectable } from '@angular/core';
// importing a product class
import { Product } from './products';
// to be able to inject http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // items is an array of products
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  // adding product to the items list
  addToCart(product: Product) {
    this.items.push(product);
  }

  // getter for items list
  getItems() {
    return this.items;
  }

  // clear items from the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  // getting shipping prices from shipping.json file using httpClient's get() method
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      'assets/shipping.json'
    );
  }
}
