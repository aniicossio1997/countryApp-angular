import { Country } from './../../interfaces/country.interface';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { TRegion } from '../../interfaces/region.type';

interface Region{
  name:string,
  value:TRegion
}
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{
  public regions:Region[]=[
    {name:'Africa',value:'africa'},
    {name:'America',value:'americas'},
    {name:'Asia',value:'asia'},
    {name:'Europa', value:'europe'},
    {name:'Oceania',value:'oceania'}
  ]
  public selectedRegion?:TRegion;
  public countries:Country[]=[];
  constructor(private countriesService:CountriesService){}
  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion=this.countriesService.cacheStore.byRegion.region;
  }
  searchByRegion(term:TRegion){
    this.selectedRegion=term;
    this.countriesService.searchRegion(term).subscribe(countries=>this.countries=countries)
  }
}
