import { Injectable, Signal, signal } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

export enum LanguageTypes {
  ENGLISH = 'en',
  UKRAINIAN = 'uk',
  RUSSIAN = 'ru',
}

export interface Language {
  name: string;
  code: LanguageTypes;
}

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  readonly availableLanguages: Signal<Array<Language>> = signal(
    Object.values(LanguageTypes).map((lang) => ({
      name: `languages.${lang}`,
      code: lang,
    }))
  );
  currentLanguage$: BehaviorSubject<LanguageTypes> =
    new BehaviorSubject<LanguageTypes>(LanguageTypes.ENGLISH);

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(LanguageTypes.ENGLISH);

    this.currentLanguage$.subscribe((lang) => {
      this.translate.use(lang);
    });
  }
}
