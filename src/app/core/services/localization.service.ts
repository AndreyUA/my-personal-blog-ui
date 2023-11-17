import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

export enum LanguageTypes {
  ENGLISH = 'en',
  UKRAINIAN = 'ua',
  RUSSIAN = 'ru',
}

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  currentLanguage$: BehaviorSubject<LanguageTypes> =
    new BehaviorSubject<LanguageTypes>(LanguageTypes.ENGLISH);

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(LanguageTypes.ENGLISH);

    this.currentLanguage$.subscribe((lang) => {
      this.translate.use(lang);
    });
  }
}
