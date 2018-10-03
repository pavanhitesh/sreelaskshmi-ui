import { Injectable } from '@angular/core';
import { Http, Response ,Headers,RequestOptions} from '@angular/http';

@Injectable()
export class DataService {

    apiUrl = 'http://localhost:8080/';

    constructor(private http: Http) {

    }

    public getData(formData) {
        console.log(formData)
        let promise = new Promise((reslove, reject) => {
            let headers = new Headers ({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers }); 
            let apiURL = this.apiUrl + 'getComplaintsData';
            this.http.post(apiURL,formData,options)
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