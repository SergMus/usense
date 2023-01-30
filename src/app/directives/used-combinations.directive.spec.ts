import { UsedCombinationsDirective } from './used-combinations.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { findEl } from '../test-helpers/element.spec-helpers';

@Component({
  template: `
    <input
      id="password-input"
      class="form-control"
      name="password"
      [type]="isShowPassword ? 'text' : 'password'"
      placeholder="Enter your password"
      appUsedCombinations
      (containAtLeastOneSpecialChar)="checkProgressCombinations($event)"
      (containAtLeastOneDigit)="checkProgressCombinations($event)"
      (containAtLeastOneLetter)="checkProgressCombinations($event)"
      (containAtLeastEightChars)="checkProgressCombinations($event)"
      (isEmpty)="checkProgressCombinations($event)"
    />

    <div class="combination-section">
      <ul>
        <li>
          <span>
            <fa-icon
              [icon]="isLetters ? faCheck : faCircle"
              [class]="isLetters ? 'fa-check' : 'fa-circle'"
            ></fa-icon>
            &nbsp;Letters (a-zA-Z)
          </span>
        </li>
        <li>
          <span>
            <fa-icon
              [icon]="isDigits ? faCheck : faCircle"
              [class]="isDigits ? 'fa-check' : 'fa-circle'"
            ></fa-icon>
            &nbsp;Number (0-9)
          </span>
        </li>
    </div>
  `,
})
class HostComponent {
  @ViewChild(UsedCombinationsDirective) directive!: UsedCombinationsDirective;

  data = of(['Item1', 'Item2', 'Item3']);
}

describe('UsedCombinationsDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let input: HTMLInputElement;
  let directive: UsedCombinationsDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsedCombinationsDirective, HostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    directive = component.directive;
    input = findEl(fixture, 'input').nativeElement;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
