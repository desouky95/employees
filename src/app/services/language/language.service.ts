import { GlobeLanguage } from '../../interfaces/GlobeLanguage';
import { Injectable, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable()
export class LanguageService {
  private currentLanguage2 = new BehaviorSubject<GlobeLanguage>({
    language: '',
    dir: '',
  });
  currentLanguage = this.currentLanguage2.asObservable();
  constructor(
    public translate: TranslateService,
    private localStorage: LocalStorageService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setGlobeLanguage(event.lang);
    });
  }

  initLanguage(language?: string): void {
    const langExists = this.localStorage.getItem('lang');
    if (langExists) {
      this.setGlobeLanguage(langExists);
      this.setLanguage(langExists);
    } else {
      this.localStorage.setItem('lang', 'en');
      this.currentLanguage2.next({
        language: language ? language : 'en',
        dir: this.getDirection(language ? language : 'en'),
      });
    }
  }

  setLanguage(language: string): void {
    this.translate.use(language);
  }

  setGlobeLanguage(language: string): void {
    this.localStorage.setItem('lang', language);
    this.currentLanguage2.next({
      language: language,
      dir: this.getDirection(language),
    });
  }

  getDirection(language: string): string {
    switch (language) {
      case 'en':
        return 'ltr';
      case 'ar':
        return 'rtl';
      default:
        return 'ltr';
    }
  }
}
