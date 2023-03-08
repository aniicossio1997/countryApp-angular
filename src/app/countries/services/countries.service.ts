import { TRegion } from './../interfaces/region.type';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStorage } from '../interfaces/cache-store.interface';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string='https://restcountries.com/v3.1';

  public cacheStore: CacheStorage={
    byCapital:{ term:'',countries:[]},
    byCountry:{term:'',countries:[]},
    byRegion:{region:'',countries:[]}
  }

  constructor(private httpClient:HttpClient) {
    this.loadFromLocalStore()
  }
  private saveToLocalStore(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }
  private loadFromLocalStore(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore=JSON.parse(localStorage.getItem('cacheStore')!)
  }

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])),
      delay(2000)
      // tap(countries=>console.log(countries))
    );
  }

  searchCapital(term:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap((countries)=> this.cacheStore.byCapital={term,countries}),
      tap((countries)=> this.saveToLocalStore())
    );
    
  }
  searchCountry(term:string):Observable<Country[]>{
    const url:string=`${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap((countries)=>this.cacheStore.byCountry={term,countries}),
      tap((countries)=> this.saveToLocalStore())
    );
    
  }
  searchRegion(region:TRegion):Observable<Country[]>{
    const url:string=`${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap((countries)=>this.cacheStore.byRegion={region,countries}),
      tap((countries)=> this.saveToLocalStore())
    );
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
