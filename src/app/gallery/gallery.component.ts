import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
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
