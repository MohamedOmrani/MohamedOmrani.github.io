import { Component, OnInit } from '@angular/core';
import { ApiProductService } from 'src/app/services/api-product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  searchText = '';

  myProduct: Product = {
    description: '',
    type: '',
    price: '',
    quantity: '',
  };

  products: Product[] = [];
  resultProducts: Product[] = [];
  editForm = false;

  constructor(private ApiProductService: ApiProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ApiProductService.getAllProducts().subscribe((product) => {
      this.resultProducts = this.products = product;
    });
  }

  addProduct(data: any) {
    this.ApiProductService.addproducts(this.myProduct).subscribe((product) => {
      this.getProducts();
      this.restProduct();
    });
  }

  deleteProduct(id: any) {
    this.ApiProductService.delete(id).subscribe(
      () =>
        (this.resultProducts = this.resultProducts.filter(
          (product) => product.id != id
        ))
    );
  }

  restProduct() {
    this.myProduct = {
      description: '',
      type: '',
      price: '',
      quantity: '',
    };
  }

  editProduct(product: any) {
    this.myProduct = product;
    this.editForm = true;
  }

  updateProduct() {
    this.ApiProductService.update(this.myProduct).subscribe((product) => {
      this.restProduct(), (this.editForm = false);
    });
  }

  searchProducts() {
    this.resultProducts = this.products.filter((product) =>
      product.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
