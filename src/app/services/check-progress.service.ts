import { Injectable } from '@angular/core';
import { Combinations } from '../interfaces/combinations';

@Injectable({
  providedIn: 'root',
})
export class CheckProgressService {
  public isSymbols: boolean = false;
  public isLetters: boolean = false;
  public isDigits: boolean = false;
  public isMinLength: boolean = false;
  public isEmpty: boolean = true;

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
}
