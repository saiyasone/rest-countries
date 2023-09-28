import { Component, OnInit } from '@angular/core';
import countryData from '../../models/countryData.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  countries: any[] = [];
  countNumber = 0;
  options: any[] = [
    {
      id: 'africa',
      name: 'Africa',
    },
    {
      id: 'america',
      name: 'America',
    },
    {
      id: 'asia',
      name: 'Asia',
    },
    {
      id: 'europe',
      name: 'Europe',
    },
    {
      id: 'oceania',
      name: 'Oceania',
    },
  ];

  ngOnInit(): void {
    this.countNumber = countryData.length;
    this.countries = countryData;
  }

  isSearch(str: string) {
    const dataValue = countryData;

    let data: any = [];
    data = dataValue.filter((el) => el.name.toLocaleLowerCase().includes(str));
    this.countries = [...data];
  }

  handlerData(value: any) {
    const dataValue = countryData;

    let data: any = [];
    data = dataValue.filter((el) =>
      el.region.toLocaleLowerCase().includes(value?.id)
    );
    this.countries = [...data];
  }
}
