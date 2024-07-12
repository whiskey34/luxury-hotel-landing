import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollButtonComponent } from '../scroll-button/scroll-button.component'; // Adjust the path as needed


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ScrollButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
