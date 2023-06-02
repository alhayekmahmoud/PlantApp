import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  item: any[]=[
    {id:1, name:'Aloe Plant', price:700, category:'Aalen', img:'assets/images/aloe.png'},
    {id:2, name:'Echeveria', price:500, category:'Aalen', img:'assets/images/Echeveria.png'},
    {id:3, name:'snake Plant', price:800, category:'Stuttgert', img:'assets/images/snake.png'}
  ]
  constructor() { }
  getItem(id: any){
    const item =this.item.find(x=>x.id==id);
    return item
  }
}
