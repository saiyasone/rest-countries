import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import countryData from '../../models/countryData.json';

@Component({
  selector: 'app-home-detail-page',
  templateUrl: './home-detail-page.component.html',
  styleUrls: ['./home-detail-page.component.css'],
})
export class HomeDetailPageComponent implements OnInit {
  loading: boolean = false;
  country!: any;
  constructor(private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((param) => {
      if (param.get('id')) {
        const countryFilter = countryData.find((el) =>
          el.name.includes(param.get('id') || '')
        );

        this.country = countryFilter;
      }
    });
  }

  isBack() {
    window.history.back();
  }

  countryList(val: any) {
    return Object.keys(val)
      .map(function (k) {
        return val[k].name;
      })
      .join(', ');
  }
}
