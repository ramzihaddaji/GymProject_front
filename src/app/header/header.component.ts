import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isCanvasMenuOpen = false;

  constructor(private router: Router) {
    // Fermer le menu chaque fois qu'une route est changée
    this.router.events.subscribe(() => {
      this.isCanvasMenuOpen = false;
    });
  }

  openCanvasMenu() {
    this.isCanvasMenuOpen = true;
  }

  closeCanvasMenu() {
    this.isCanvasMenuOpen = false;
  }

  ngAfterViewInit(): void {
    this.applyBackgroundImages();

    // Fermer le menu quand un lien est cliqué
    const menuLinks = document.querySelectorAll('.offcanvas-menu-wrapper a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeCanvasMenu();
      });
    });
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
