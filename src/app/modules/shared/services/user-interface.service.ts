import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })
export class UserInterfaceService {
  constructor(
    private _snackBar: MatSnackBar
  ) {}

  scrollToId(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      this.scrollToElement(element);
    }
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  showAlert(message: string, action?: string, config?: any): void {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}