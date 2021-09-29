import { ElementRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollerService {
  scroller(element: ElementRef, time: number, behavior: string) {
    setTimeout(() => {
      element.nativeElement.scroll({
        top: element.nativeElement.scrollHeight,
        behavior: behavior,
      });
    }, time * 1000);
  }
}
