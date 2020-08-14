import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  _productlist: Product[];

  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit() {
    this._service.fetchProductListFromRemote().subscribe(
      data => {
        console.log("response recieved");
        this._productlist = data;
      },
      error => console.log("exception occured")

    )

  }
  goToAddProduct() {
    this._route.navigate(['/addproduct']);
  }
  goToEditProduct(id : number) {
    console.log("id"+id);
    this._route.navigate(['/editproduct',id]);
  }
  goToViewProduct (id : number) {
    console.log("id"+id);
    this._route.navigate(['/viewproduct',id]);
  }

  deleteProduct(id : number){
    this._service.deleteProductByidFromRemote(id).subscribe(
      data => {
      console.debug("deleted succesfully");
      this._route.navigate(['/productlist']);
      },
      error => console.log("exception occured")
    )
  }
}