import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
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
