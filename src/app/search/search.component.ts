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

  public filterData(event:any) {
    //console.log("Data----->",event.target.value);
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

}
