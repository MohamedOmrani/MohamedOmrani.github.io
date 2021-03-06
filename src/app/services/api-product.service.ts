import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  delete(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addproducts(product: any) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(product: any) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }
}
