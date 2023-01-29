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

  public togglePasswordVisibility(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  public checkUsedCombinations(): void {

  }
}
