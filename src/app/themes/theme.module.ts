import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeDirective } from './theme.directive';
import { THEMES, ACTIVE_THEME, ThemeOptions } from '../models/theme.model';

@NgModule({
  imports: [CommonModule],
  declarations: [ThemeDirective],
  exports: [ThemeDirective],
})
export class ThemeModule {
  static forRoot(options: ThemeOptions): ModuleWithProviders<ThemeModule> {
    const themeJson = localStorage.getItem('theme');
    let themeData = 'dark';

    if (!!themeJson) {
      themeData = themeJson;
    } else {
      localStorage.setItem('theme', themeData);
    }

    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes,
        },
        {
          provide: ACTIVE_THEME,
          useValue: themeData,
        },
      ],
    };
  }
}
