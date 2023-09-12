import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { isNullOrUndefined } from "../helpers/common.helper";

@Injectable({ providedIn: 'root' })
export class UserInterfaceService {
  constructor(
    private _snackBar: MatSnackBar
  ) {}

  getCoords(element: HTMLElement) {
    var box = element.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.scrollX || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

  scrollToId(id: string, offsetY?: number): void {
    const element = document.getElementById(id);
    if (element) {
      this.scrollToElement(element, offsetY);
    }
  }

  scrollToElement(element: HTMLElement, offsetY?: number): void {
    if (!isNullOrUndefined(offsetY)) {
      const { top } = this.getCoords(element);
      this.scrollToTop(top + (offsetY as number));
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