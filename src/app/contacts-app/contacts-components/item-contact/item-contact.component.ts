import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.scss']
})
export class ItemContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDel(ev:any){
    console.log(ev)
  }

}
