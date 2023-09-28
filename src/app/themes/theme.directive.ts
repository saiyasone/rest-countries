import { Directive, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from '../services/theme.service';
import { Theme } from '../models/theme.model';

@Directive({
  selector: '[app-theme]',
})
export class ThemeDirective implements OnInit {
  private unsubscribe = new Subject();
  constructor(
    private _elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private _themeService: ThemeService
  ) {}

  ngOnInit() {
    const active = this._themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }
    this._themeService.themeChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  updateTheme(theme: Theme) {
    for (const key in theme.properties) {
      this.document.body.style.backgroundColor =
        theme.properties['--theme-bg'];
      this._elementRef.nativeElement.style.setProperty(
        key,
        theme.properties[key]
      );
    }
  }
}
