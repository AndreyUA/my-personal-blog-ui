import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { IconsService } from './core/services/icons.service';
import { LocalizationService } from './core/services/localization.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IconsService],
})
export class AppComponent {
  constructor(
    private _iconsService: IconsService,
    private _localizationService: LocalizationService
  ) {}
}
