import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageType } from 'src/app/interfaces/LanguageType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();
  @Output() langugaeChange: EventEmitter<LanguageType> = new EventEmitter();
  @Input('lang') currentLanguage: string = '';

  selected = null;
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {}

  toggle(): void {
    this.toggleMenu.emit(true);
  }

  langValueChange(): void {
    this.langugaeChange.emit({
      language: this.currentLanguage,
    });
  }
}
