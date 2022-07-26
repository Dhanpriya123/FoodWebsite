import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  scrollDown()
  {
    window.scroll(0,1000);
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
