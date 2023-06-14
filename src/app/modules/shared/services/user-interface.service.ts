import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserInterfaceService {
  constructor() {}

  scrollToId(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      this.scrollToElement(element);
    }
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}