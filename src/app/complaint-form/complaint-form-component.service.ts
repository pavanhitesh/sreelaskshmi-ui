import { Injectable } from '@angular/core';
import { Http, Response,Headers ,RequestOptions} from '@angular/http';


@Injectable()
export class DataSavingService {

    userData:any;

    apiUrl = 'http://localhost:8080/';

    constructor(private http: Http) {
        
    }


    public saveData(formData){
        let promise = new Promise((reslove, reject) => {
            let headers = new Headers ({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers }); 
            this.userData = JSON.stringify(formData);
            console.log("Save Data",this.userData);
            let apiURL = this.apiUrl + 'saveData';
            this.http.post(apiURL,this.userData,options)
                .toPromise()
                .then(
                res => {
                    console.log("Service", res
                );
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