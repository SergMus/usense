import { Component } from '@angular/core';
import {
  faCircle,
  faCheck,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

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

  public isDigits: boolean = false;
  public isLetters: boolean = false;
  public isSymbols: boolean = false;
  public isMinLength: boolean = false;
  public isEmpty: boolean = true;

  public togglePasswordVisibility(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  public checkSymbols(variant: boolean): void {
    this.isSymbols = variant;
  }

  public checkDigits(variant: boolean): void {
    this.isDigits = variant;
  }

  public checkLetters(variant: boolean): void {
    this.isLetters = variant;
  }

  public checkMinLength(variant: boolean): void {
    this.isMinLength = variant;
  }

  public checkEmpty(variant: boolean): void {
    this.isEmpty = variant;
  }
}
