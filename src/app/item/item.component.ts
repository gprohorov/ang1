import { Component, OnInit } from '@angular/core';
import {Item} from '../model/item';
import {ItemService} from '../services/item.service';
// @ts-ignore
;


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  hello = 'Items table ';
  items: any;
  constructor(private service: ItemService) { }

  ngOnInit(): void {
    const resp = this.service.getItems();
    resp.subscribe((data) => this.items = data);
  }


/*  public deleteItem(id: string){
    const resp = this.service.deleteItem(id);
    resp.subscribe((data) => this.items = data);
  }*/

}
