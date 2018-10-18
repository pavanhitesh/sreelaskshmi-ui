import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {DataSavingService} from './complaint-form-component.service';
import { InputData } from 'src/app/complaint-form/inputData';


@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css'],
  providers:[DataSavingService],
  
})
export class ComplaintFormComponent implements OnInit {
  public loading = false;
  public isDataSaved = false;
  public isError = false;
  public errorMessage;
  public inputData :any;
  constructor(private saveService:DataSavingService) { }
  
  ngOnInit() {
    this.isError = false;
    this.inputData = new InputData('Enter First Name','Provide Mobile No');
  }

  public onSubmit(form:NgForm){
    this.loading = true;
    console.log(form);
    if(!form.invalid && form.touched){
      const data =form.value;
      console.log("JSON",data);
      this.saveService.saveData(data).then((res)=>{
        console.log(res);
        this.loading = false;
        form.resetForm();
        this.isDataSaved = true;
      }).catch((err)=>{
        console.log(err);
        this.loading = false;
      });
    }else{
      this.loading = false;
      this.isError = true;
      this.errorMessage = "Please Enter the Mandatory Fields"
    }
  }


}
