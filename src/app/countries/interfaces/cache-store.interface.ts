import { TRegion } from './region.type';
import { Country } from './country.interface';
export interface CacheStorage {
    byCapital:TermCountry,
    byCountry: TermCountry,
    byRegion: RegionCountries

}

export interface TermCountry{
    term: string;
    countries: Country[];
}
export  interface RegionCountries{
    region:TRegion,
    countries:Country[];
}