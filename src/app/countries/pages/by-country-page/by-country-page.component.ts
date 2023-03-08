import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries:Country[]=[];
  public initialValueTerm:string=''
  constructor(private countriesService:CountriesService){
  }
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountry.countries;
    this.initialValueTerm=this.countriesService.cacheStore.byCountry.term;
  }
  searchByCountry(term:string){
    this.countriesService.searchCountry(term).subscribe(countries=> this.countries= countries)
  }

}
