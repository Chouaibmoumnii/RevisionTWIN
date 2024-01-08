import { ProductService } from './../Service/ProductService';
import { Product } from './../entity/Product';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  sortDescending: boolean = false;


  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.productService.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        this.applySearchFilter();
        this.sortProducts();

      });
  }

  buyProduct(product: Product): void {
    this.productService.addProductToCart(product).subscribe({
      next: () => {
        alert ("product added with success");
      },
      error : () => {
        alert ("product already exist");
      }
    })
   /* this.productService.addProductToCart(product).subscribe({
      next: () => {
        console.log('Product added to the cart successfully.');
      },
      error: (err: any) => console.error(err),

    });*/
  }
  viewDetails(product: Product): void {
    this.router.navigate(['/details', product.id]);
  }
  modifierProduct(product: Product): void {
    this.router.navigate(['/modifier', product.id]);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        alert('Product deleted successfully');
        this.fetchData();
      },
      (error) => {
        alert('Error deleting product');
      }
    );
  }
  applySearchFilter(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.price.toString().includes(this.searchQuery)
    );
    this.sortProducts();
  }

  toggleSortOrder(): void {
    this.sortDescending = !this.sortDescending;
    this.sortProducts();
  }
  sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (this.sortDescending) {
        return priceB - priceA;
      } else {
        return priceA - priceB;
      }
    });
  }


}
