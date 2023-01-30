import { Component } from '@angular/core';
import {
  faCircle,
  faCheck,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Combinations } from './interfaces/combinations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Usense test';
  public faCircle = faCircle;
  public faCheck = faCheck;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public isShowPassword: boolean = false;

  public isDigits?: boolean = false;
  public isLetters?: boolean = false;
  public isSymbols?: boolean = false;
  public isMinLength?: boolean = false;
  public isEmpty?: boolean = true;

  public togglePasswordVisibility(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  public checkProgressCombinations(variant: Combinations): void {
    switch (variant.instance) {
      case 'symbols':
        this.isSymbols = variant.status;

        break;
      case 'letters':
        this.isLetters = variant.status;

        break;
      case 'digits':
        this.isDigits = variant.status;

        break;
      case 'minLength':
        this.isMinLength = variant.status;

        break;
      case 'empty':
        this.isEmpty = variant.status;

        break;
      default:
        variant;
        break;
    }
  }

  get easy(): boolean {
    if (
      !this.isMinLength ||
      this.isDigits ||
      this.isLetters ||
      this.isSymbols
    ) {
      return true;
    }
    return false;
  }

  get medium(): boolean {
    if (
      this.isMinLength &&
      ((this.isDigits && this.isLetters) ||
        (this.isDigits && this.isSymbols) ||
        (this.isLetters && this.isSymbols))
    ) {
      return true;
    }
    return false;
  }

  get strong(): boolean {
    if (this.isDigits && this.isLetters && this.isSymbols && this.isMinLength)
      return true;

    return false;
  }
}
