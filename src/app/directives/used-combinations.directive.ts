import {
  Directive,
  ElementRef,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';

import {
  DIGITS_REG_EXP,
  LETTERS_REG_EXP,
  SYMBOLS_REG_EXP,
} from '../constants/regexp';

@Directive({
  selector: '[appUsedCombinations]',
})
export class UsedCombinationsDirective {
  @Output() public containAtLeastEightChars = new EventEmitter<boolean>();
  @Output() public containAtLeastOneLetter = new EventEmitter<boolean>();
  @Output() public containAtLeastOneDigit = new EventEmitter<boolean>();
  @Output() public containAtLeastOneSpecialChar = new EventEmitter<boolean>();
  @Output() public isEmpty = new EventEmitter<boolean>();

  constructor(public el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  public onInput(): void {
    const trimmedValue = this.el.nativeElement.value.trim();

    if (!trimmedValue.length) {
      this.containAtLeastOneSpecialChar.emit(false);
      this.containAtLeastOneDigit.emit(false);
      this.containAtLeastOneLetter.emit(false);
      this.isEmpty.emit(true);
      return;
    }

    if (trimmedValue.length) {
      this.isEmpty.emit(false);
    }

    if (trimmedValue.length >= 8) {
      this.containAtLeastEightChars.emit(true);
    } else {
      this.containAtLeastEightChars.emit(false);
    }

    if (SYMBOLS_REG_EXP.test(trimmedValue)) {
      this.containAtLeastOneSpecialChar.emit(true);
    } else {
      this.containAtLeastOneSpecialChar.emit(false);
    }

    if (DIGITS_REG_EXP.test(trimmedValue)) {
      this.containAtLeastOneDigit.emit(true);
    } else {
      this.containAtLeastOneDigit.emit(false);
    }

    if (LETTERS_REG_EXP.test(trimmedValue)) {
      this.containAtLeastOneLetter.emit(true);
    } else {
      this.containAtLeastOneLetter.emit(false);
    }
  }
}
