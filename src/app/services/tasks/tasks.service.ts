import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //kao parametar konstruktora dodajemo servise koje koristimo i obezbedjuje dependancy injection,
  //html , osim njega treba nam i putanja do resursa, posto ovaj tasks servis se koristi za sve endpointe taskova,
    //mi sve ovde stavljamo, da ne bi hardkodovali adresu, mozemo samo osnovnu adresu do kontrolera izvuci u var. i koristiti
  

    //<!!! --------------- LINK NIJE DO MOG MICROENV VEC OD PROFESORA ----------------- !!!>
    //Proveriti metodu mog mockovanog kontrolera
  baseUrl="https://app.microenv.com/backend/key/4e4185ac56dffb723380ab/rest/api/tasks/"; 

  constructor(private http: HttpClient) { }

  // Koristimo jednu jednostavnu metodu za izvrsavanje GET metode. Vracamo citav response iz koga dobijamo lako boddy u klasi table-list.component.ts 
  public getTasks() : Observable<any> {
    return this.http.get(this.getUrl())
      .pipe(map((response: Response) => response));
  }

  // Cesto cemo koristiti ovaj URL pa da ga sakrijemo, da mu se ne moze lako pristupiti od spolja.
  private getUrl() {
    return `${this.baseUrl}`;
  }
}
