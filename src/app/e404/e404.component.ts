import { Component } from '@angular/core';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.css']
})
export class E404Component {
  constructor() { }

  ngAfterViewInit(): void {
    this.applyBackgroundImages();
  }

  applyBackgroundImages(): void {
    const elements = document.querySelectorAll<HTMLElement>('.set-bg');
    
    elements.forEach((element) => {
      const bg = element.getAttribute('data-setbg');
      if (bg) {
        element.style.backgroundImage = `url(${bg})`;
      }
    });
  }
}
