import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
})
export class CustomDropdownComponent implements OnInit {
  @Input() options: any;
  @Input() title!: string;
  @Output() currentValueChange = new EventEmitter();

  private currentIndex = -1;
  currentValue!: any;
  dropdownOpen: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.currentValue = '';
  }

  public get dropdownElement(): Element {
    return this.el.nativeElement.querySelector('.dropdown-list');
  }

  handleKeyboardEvent($event: KeyboardEvent) {
    if (!this.dropdownOpen) {
      return;
    }

    $event.preventDefault();
    if ($event.code === 'ArrowUp') {
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      } else if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.el.nativeElement
        .querySelectorAll('li')
        .item(this.currentIndex)
        .focus();
    } else if ($event.code === 'ArrowDown') {
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      } else if (this.currentIndex < this.options.length - 1) {
        this.currentIndex++;
      }
      this.el.nativeElement
        .querySelectorAll('li')
        .item(this.currentIndex)
        .focus();
    } else if (
      ($event.code === 'Enter' || $event.code === 'NumpadEnter') &&
      this.currentIndex >= 0
    ) {
      this.selectByIndex(this.currentIndex);
    } else if ($event.code === 'Escape') {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.dropdownElement.setAttribute('aria-expanded', 'false');
    this.currentIndex = -1;
    this.dropdownOpen = false;
  }

  selectByIndex(i: number) {
    let value = this.options[i];
    this.select(value);
  }

  select(value: string) {
    this.currentValue = value;
    this.closeDropdown();
    this.currentValueChange.emit(this.currentValue);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownElement.setAttribute(
      'aria-expanded',
      this.dropdownOpen ? 'true' : 'false'
    );
  }
}
