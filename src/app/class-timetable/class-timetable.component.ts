import { Component } from '@angular/core';

@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent {
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
