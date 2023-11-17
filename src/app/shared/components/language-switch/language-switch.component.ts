import {
  Component,
  DestroyRef,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import {
  LocalizationService,
  Language,
} from '../../../core/services/localization.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, TranslateModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent implements OnInit {
  selectedLanguage: WritableSignal<Language> = signal(
    this.localizationService.availableLanguages()[0]
  );

  constructor(
    private destroyRef: DestroyRef,
    public localizationService: LocalizationService
  ) {}

  ngOnInit(): void {
    this.localizationService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((currentLanguage) => {
        const currentLang =
          this.localizationService
            .availableLanguages()
            .find((lang) => lang.code === currentLanguage) ??
          this.localizationService.availableLanguages()[0];

        this.selectedLanguage.set(currentLang!);
      });
  }

  selectLang(lang: Language) {
    this.localizationService.currentLanguage$.next(lang.code);
  }
}
