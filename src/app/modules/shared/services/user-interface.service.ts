import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { isNullOrUndefined } from "../helpers/common.helper";

@Injectable({ providedIn: 'root' })
export class UserInterfaceService {
  constructor(
    private _snackBar: MatSnackBar
  ) {}

  scrollToId(id: string, offsetY?: number): void {
    const element = document.getElementById(id);
    if (element) {
      this.scrollToElement(element, offsetY);
    }
  }

  scrollToElement(element: HTMLElement, offsetY?: number): void {
    if (!isNullOrUndefined(offsetY)) {
      const rect = element.getBoundingClientRect();
      this.scrollToTop(rect.top + (offsetY as number));
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  scrollToTop(top?: number): void {
    window.scrollTo({ top: top ? top : 0, behavior: "smooth" });
  }

  showAlert(message: string, action?: string, config?: any): void {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}