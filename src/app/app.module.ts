import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeDetailPageComponent } from './pages/home-detail-page/home-detail-page.component';
import { ThemeModule } from './themes/theme.module';
import { lightTheme } from './models/light.model';
import { darkTheme } from './models/dark.model';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { DropdownDirective } from './themes/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeDetailPageComponent,
    HeaderComponent,
    CustomDropdownComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: ':id',
        component: HomeDetailPageComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ThemeModule.forRoot({
      active: 'dark',
      themes: [lightTheme, darkTheme],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
