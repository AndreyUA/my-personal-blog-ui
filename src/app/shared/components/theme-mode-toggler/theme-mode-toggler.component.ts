import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-mode-toggler',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './theme-mode-toggler.component.html',
  styleUrl: './theme-mode-toggler.component.scss',
})
export class ThemeModeTogglerComponent {
  isDarkTheme: WritableSignal<boolean> = signal(false);

  toggleTheme(): void {
    this.isDarkTheme.set(!this.isDarkTheme());
  }
}
