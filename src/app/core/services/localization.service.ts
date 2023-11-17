import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

export enum Language {
  ENGLISH = 'en',
  UKRAINIAN = 'ua',
  RUSSIAN = 'ru',
}

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(Language.ENGLISH);
    this.translate.use(Language.ENGLISH);
  }
}
