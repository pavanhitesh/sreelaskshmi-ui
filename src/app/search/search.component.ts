import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {DataService} from './search.component.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})
export class SearchComponent implements OnInit {

  

  public allData:any=[];
  public isData:boolean = false;
  public loading = false;
  
  constructor(private dataService:DataService){

  }

  ngOnInit(){
    
  }

  public getAllData(formData){
    this.loading = true;
    this.dataService.getData(JSON.stringify(formData)).then((response)=>{
      const data = JSON.parse(response['_body']);
      console.log("App Component->",data);
      this.allData = data;
      if(this.allData.length>0){
        this.isData = true;
      }
      this.loading = false;
    }).catch((err)=>{
      console.log(err);
      this.loading = false;
    });

  }

  public onSubmit(form:NgForm){
    console.log(form.value);
    this.getAllData(form.value);
  }

  public edit(id){
    console.log("ID",id);
  }

}
