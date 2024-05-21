import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';
import { SharedModule } from '../../../shared/shared.module';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    CountryTableComponent
  ],
  templateUrl: './byCountryPage.component.html',
  styleUrl: './byCountryPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ByCountryPageComponent {

   public countries: Country[] = []
   constructor(private countryService: CountriesService){}

   searchByCountry(term: string): void{
    this.countryService.searchCountry(term)
    .subscribe(countriesApi =>{
      this.countries = countriesApi
    })
    }
 }
