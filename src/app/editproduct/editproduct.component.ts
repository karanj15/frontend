import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product = new Product();
  constructor(private _route:Router, private _service: NgserviceService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByidFromRemote(id).subscribe(
      data =>{
        console.log("data recieved");
        this.product=data;
      },
      error => console.log("exception occured")
    )
  }
  updateProductformsubmit()
  {
     this._service.addproductToRemote(this.product).subscribe
     (
       data =>
           {
             console.log("data added sucesfully");
             this._route.navigate(['productlist']);
           },
           error=>console.log("error")
     )
  }
  gotolist(){
    console.log('go back');
    this._route.navigate(['productlist']);
  }

}
