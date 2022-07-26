import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  getdata()
  {
    alert("Your Order Has Been Placed")
  }


  constructor() { }

  ngOnInit(): void {
  }

}
 
