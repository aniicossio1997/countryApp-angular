import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string='https://restcountries.com/v3.1'

  constructor(private httpClient:HttpClient) { }

  searchCapital(term:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])),
      // tap(countries=>console.log(countries))
    )
    
  }
  searchCountry(term:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])),
      // tap(countries=>console.log(countries))
    )
    
  }
  searchRegion(term:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])),
      // tap(countries=>console.log(countries))
    ) 
  }
  searchCountryByAlphaCode(id:string):Observable<Country| null>{
    const url:string=`${this.apiUrl}/alpha/${id}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      map(countries=>countries.length >0 ? countries[0] : null ),
      catchError(error=> of(null))
    )
  }
}
