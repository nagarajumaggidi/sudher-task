import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit  {
  baseUrl:"https://hn.algolia.com/api/v1/search_by_date?tags=story"
  data: any;
  dataList: any;
  hits:any=[];
  model: any;
  constructor(private httpService:HttpServicesService,private http:HttpClient){

  }
  ngOnInit(){
    this.httpService.getMethod().subscribe(Response=>{
   this.data=Response;
  this.dataList=this.data.hits;
  console.log(this.data)

   })
  }
  url;
  edit(id){
    console.log(id)
   this.model=id;
  }
  //  getUserById(id: string) {
  //   return this.http.get(this.baseUrl + '/' + this.url);
  // }
}