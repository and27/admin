import {Http,Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable ()

export class AppService {
    constructor(private http:Http){}
    Url1="http://eparqin.com/json/ordenesjson.php";
    Url2="http://eparqin.com/json/detallejson.php";
    clientes=[];
    pedidos=[];

    getC () {
        return this.http.get(this.Url1)
            
            .map((res:Response) => res.json());


    }
    getP () {
        return this.http.get(this.Url2)

            .map((res:Response) => res.json());


    }

}

