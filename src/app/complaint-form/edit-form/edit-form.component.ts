import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {EditFormData} from './edit-form.component.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers:[EditFormData]
})
export class EditFormComponent implements OnInit {

  public editData:any={};
  public updatedData: any = {};
  public id;
  public isDataSaved;
  constructor(private editService:EditFormData,
    private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.getEditFormData(id);
    });
  }


  public onSubmit(form:NgForm){
    if(!form.invalid){
      console.log(form);
      this.updatedData = form.value;
      this.updatedData.id = this.id;
      console.log("Upadted Data",this.updatedData);
      this.editService.updateData(this.updatedData).then((res)=>{
        console.log(res);
        form.resetForm();
        this.isDataSaved=true;
        this.route.navigate(['/search']);
      }).catch((err)=>{
        console.log(err);
      });
    }
  }

  public getEditFormData(id){

    this.editService.getEditFormData(id).then((res)=>{
      console.log(res);
      this.editData = JSON.parse(res['_body']);
      this.id = this.editData.id;
      console.log("JSON",this.editData);
    }).catch((err)=>{
      console.log(err);
    });
  }

  

}
