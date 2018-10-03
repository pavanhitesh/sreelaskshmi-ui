import { Injectable } from '@angular/core';
import { Http, Response,Headers ,RequestOptions} from '@angular/http';


@Injectable()
export class EditFormData {


    public updatedData;
    

    apiUrl = 'http://localhost:8080/';

    constructor(private http: Http) {
        
    }

    public getEditFormData(id){
        let promise = new Promise((reslove, reject) => {
            let apiURL = this.apiUrl + 'getData?id='  +id;
            this.http.get(apiURL)
                .toPromise()
                .then(
                res => {
                    console.log("GetService", res);
                    reslove(res);
                }
                ).catch((err)=>{
                    console.log(err);
                       reject(err); 
                });
        });
        return promise;
    }


    public updateData(formData){
        let promise = new Promise((reslove, reject) => {
            let headers = new Headers ({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers }); 
            this.updatedData = JSON.stringify(formData);
            console.log("Save Data",this.updatedData);
            let apiURL = this.apiUrl + 'updateData';
            this.http.post(apiURL,this.updatedData,options)
                .toPromise()
                .then(
                res => {
                    console.log("Service", res);
                    reslove(res);
                }
                ).catch((err)=>{
                    console.log(err);
                       reject(err); 
                });

        });
        return promise;

    }


}