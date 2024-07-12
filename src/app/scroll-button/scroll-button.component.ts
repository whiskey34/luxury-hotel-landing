import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  standalone: true,
  imports: [],
  templateUrl: './scroll-button.component.html',
  styleUrl: './scroll-button.component.css'
})
export class ScrollButtonComponent {
  scrollToContent() {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
