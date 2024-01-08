// Assuming your UpdateProductComponent class looks like this
import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/Product';
import { ProductService } from '../Service/ProductService';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private service: ProductService,
              private route: ActivatedRoute,
              private router:Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if (productId) {
        this.fetchProductDetails(productId);
      }
    });
  }

  private fetchProductDetails(productId: string): void {
    this.service.getProductById(productId).subscribe({
      next: (response: Product) => {
        this.product = response;
      },
      error: (err: any) => console.error(err),
    });
  }

  updateProduct() {
    const productId = this.product.id.toString();
    this.service.modifierProduct(productId, this.product).subscribe(
      (updatedProduct) => {
        alert('Product updated successfully');
        this.router.navigateByUrl(`home`);

      },
      (error) => {
        alert('Error updating product:');
      }
    );
  }

}
