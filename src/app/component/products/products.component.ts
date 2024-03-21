import { Component } from '@angular/core';
import { Product } from '../../Models/Commerce/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  product: Product;
  products: Product[];


}
