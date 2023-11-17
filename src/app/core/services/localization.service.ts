import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  constructor(private translate: TranslateService) {
    // TODO: avoid hardcoding the default language
    this.translate.setDefaultLang('en');
    // TODO: avoid hardcoding the default language
    this.translate.use('en');
  }
}
