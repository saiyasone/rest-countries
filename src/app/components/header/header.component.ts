import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMode = 'dark';
  constructor(private _themeService: ThemeService) {
    let activeMode = _themeService.getActiveTheme();
    if (activeMode.name.includes('dark')) {
      this.isMode = 'light';
    } else {
      this.isMode = 'dark';
    }
  }

  setMode() {
    const active = this._themeService.getActiveTheme();
    let activeTheme = active.name || 'dark';

    if (activeTheme.includes('dark')) {
      this.isMode = 'dark';
      this._themeService.setTheme('light');
    } else {
      this.isMode = 'light';
      this._themeService.setTheme('dark');
    }
  }
}
