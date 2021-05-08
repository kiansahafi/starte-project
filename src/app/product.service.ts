import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getgoods(_productid: string) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/auth/goods/' + _productid
    );
  }

  deletegoods(_productid: string) {
    return this.http.delete(
      'https://tavana-node.herokuapp.com/auth/goods/' + _productid
    );
  }

  sendgoods(object: any) {
    return this.http.post(
      'https://tavana-node.herokuapp.com/auth/goods/',
      object
    );
  }

  editgoods(object: any) {
    return this.http.put(
      'https://tavana-node.herokuapp.com/auth/goods',
      object
    );
  }
}
