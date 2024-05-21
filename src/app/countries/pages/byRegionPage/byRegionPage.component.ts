import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from '../../../shared/shared.module';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    CountryTableComponent
  ],
  templateUrl:'./byRegionPage.component.html',
  styleUrl: './byRegionPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ByRegionPageComponent {

   public countries: Country[] = []
   constructor(private countryService: CountriesService){}

   searchByRegion(term: string): void{
    this.countryService.searchRegion(term)
    .subscribe(countriesApi =>{
      this.countries = countriesApi
    })
    }
 }
