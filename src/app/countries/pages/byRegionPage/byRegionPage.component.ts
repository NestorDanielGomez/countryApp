import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { SharedModule } from '../../../shared/shared.module';
import { CountryTableComponent } from '../../components/countryTable/countryTable.component';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CommonModule, SharedModule, CountryTableComponent],
  templateUrl: './byRegionPage.component.html',
  styleUrl: './byRegionPage.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countryService.searchRegion(region).subscribe((countriesApi) => {
      this.countries = countriesApi;
      this.isLoading = false;
    });
  }
}
