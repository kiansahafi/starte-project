import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productCart: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  productInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  public get getProductCart(): Observable<any[]> {
    return this.productCart.asObservable();
  }

  public set setProductCart(v) {
    this.productCart.next(v);
  }

  public get getProduct(): Observable<any[]> {
    return this.productInfo.asObservable();
  }

  public set setProduct(v) {
    this.productInfo.next([]);
    this.productInfo.next(v);
  }

  public get headerOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
  }

  getgoodsById(_productid: any) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/goods/' + '{' + _productid + '}',
      this.headerOptions
    );
  }

  deletegoodsById(_productid: string) {
    return this.http.delete(
      'https://tavana-node.herokuapp.com/goods/' + '{' + _productid + '}',
      this.headerOptions
    );
  }

  sendgoods(object?: any) {
    return this.http.post(
      'https://tavana-node.herokuapp.com/goods',
      object,
      this.headerOptions
    );
  }

  editgoods(object: any) {
    return this.http.put(
      'https://tavana-node.herokuapp.com/auth/goods',
      object,
      this.headerOptions
    );
  }
  getgoods(object?: any) {
    return this.http.get(
      'https://tavana-node.herokuapp.com/goods',
      this.headerOptions
    );
  }
}
