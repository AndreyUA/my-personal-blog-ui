import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.initIcons();
  }

  private initIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/github.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/linkedin.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/instagram.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'telegram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/telegram.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/angular.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'react',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/react.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'node-js',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/node-js.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'postgresql',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/postgresql.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'mongodb',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/icons/mongodb.svg'
      )
    );
  }
}
