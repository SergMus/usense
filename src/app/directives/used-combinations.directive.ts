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
import { Combinations } from '../interfaces/combinations';

@Directive({
  selector: '[appUsedCombinations]',
})
export class UsedCombinationsDirective {
  @Output() public containAtLeastEightChars = new EventEmitter<Combinations>();
  @Output() public containAtLeastOneLetter = new EventEmitter<Combinations>();
  @Output() public containAtLeastOneDigit = new EventEmitter<Combinations>();
  @Output() public containAtLeastOneSpecialChar = new EventEmitter<Combinations>();
  @Output() public isEmpty = new EventEmitter<Combinations>();

  constructor(public el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  public onInput(): void {
    const trimmedValue = this.el.nativeElement.value.trim();

    if (!trimmedValue.length) {
      this.containAtLeastOneSpecialChar.emit({status: false, instance: 'symbols'});
      this.containAtLeastOneDigit.emit({status: false, instance: 'digits'});
      this.containAtLeastOneLetter.emit({status: false, instance: 'letters'});
      this.isEmpty.emit({status: true, instance: 'empty'});
      return;
    }

    if (trimmedValue.length) {
      this.isEmpty.emit({status: false, instance: 'empty'});
    }

    if (trimmedValue.length >= 8) {
      this.containAtLeastEightChars.emit({status: true, instance: 'minLength'});
    } else {
      this.containAtLeastEightChars.emit({status: false, instance: 'minLength'});
    }

    if (SYMBOLS_REG_EXP.test(trimmedValue)) {
      this.containAtLeastOneSpecialChar.emit({status: true, instance: 'symbols'});
    } else {
      this.containAtLeastOneSpecialChar.emit({status: false, instance: 'symbols'});
    }

    if (DIGITS_REG_EXP.test(trimmedValue)) {
      this.containAtLeastOneDigit.emit({status: true, instance: 'digits'});
    } else {
      this.containAtLeastOneDigit.emit({status: false, instance: 'digits'});
    }

    if (LETTERS_REG_EXP.test(trimmedValue)) {
      this.containAtLeastOneLetter.emit({status: true, instance: 'letters'});
    } else {
      this.containAtLeastOneLetter.emit({status: false, instance: 'letters'});
    }
  }
}
