import { Component } from '@angular/core';
import {
  faCircle,
  faCheck,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Combinations } from './interfaces/combinations';
import { CheckProgressService } from './services/check-progress.service';

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

  constructor(private readonly checkProgressService: CheckProgressService) {}

  public togglePasswordVisibility(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  public checkProgress(variant: Combinations): void {
    this.checkProgressService.checkProgressCombinations(variant);
  }

  get isDigits(): boolean {
    return this.checkProgressService.isDigits;
  }

  get isLetters(): boolean {
    return this.checkProgressService.isLetters;
  }

  get isSymbols(): boolean {
    return this.checkProgressService.isSymbols;
  }

  get isMinLength(): boolean {
    return this.checkProgressService.isMinLength;
  }
  
  get isEmpty(): boolean {
    return this.checkProgressService.isEmpty;
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
