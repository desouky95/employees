import { Component, OnInit } from '@angular/core';
import { GlobeLanguage } from 'src/app/interfaces/GlobeLanguage';
import { LanguageType } from 'src/app/interfaces/LanguageType';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  opened = false;
  currentLanguage: GlobeLanguage = { language: 'en', dir: 'ltr' };
  constructor(private lang: LanguageService) {}
  ngOnInit(): void {
    this.lang.currentLanguage.subscribe((e) => {
      this.currentLanguage = { dir: e.dir, language: e.language };
    });
  }

  changelanguage($e: LanguageType): void {
    this.lang.setLanguage($e.language);
  }
}
