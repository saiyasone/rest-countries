import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter();
  subscription$!: Subscription;

  constructor(
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  isInside(element: HTMLElement): boolean {
    return (
      element === this.elRef.nativeElement ||
      !this.elRef.nativeElement.contains(element)
    );
  }

  ngAfterViewInit(): void {
    this.subscription$ = fromEvent(this.document, 'click')
      .pipe(filter((e) => this.isInside(e.target as HTMLElement)))
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
