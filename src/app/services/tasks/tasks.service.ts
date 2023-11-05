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
  
  baseUrl="https://app.microenv.com/backend/key/144d668ee5400cc2cecc74/rest/api/tasks/";

  constructor(private http: HttpClient) { }

  //metoda koja vrsi poziv ka microenv platformi, http vraca response i moramo definisati osluskivac ka response, i subscribovati se
  //da bi mogli da izvucemo podatke, observable.
  getTasks(): Observable<any> {
    return this.http.get(this.baseUrl)
      .pipe(map((response : Response) => response)); //vraca sve, header, body itd. mi zelimo samo body trenutno, (json), za to koristimo pipe
  }

  // Cesto cemo koristiti ovaj URL pa da ga sakrijemo, da mu se ne moze lako pristupiti od spolja.
  private getUrl() {
    return `${this.baseUrl}`;
  }
}
