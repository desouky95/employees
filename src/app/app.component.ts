import { GlobeLanguage } from 'src/app/interfaces/GlobeLanguage';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'employees';
  currentLanguage: GlobeLanguage = {
    dir: 'rtl',
    language: 'en',
  };
  constructor(private lang: LanguageService) {}

  ngOnInit(): void {
    this.lang.initLanguage();
    this.lang.currentLanguage.subscribe((e) => {
      document.dir = e.dir ? e.dir : 'rtl';
      this.currentLanguage = { dir: e.dir, language: e.language };
    });
  }
}
