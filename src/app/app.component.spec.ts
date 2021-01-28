import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './services/language/language.service';

let langService: LanguageService;
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslateModule.forRoot()],
      providers: [LanguageService, TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    langService = TestBed.get(LanguageService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'employees'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('employees');
  });

  it(`should have current used language`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    langService.initLanguage();
    langService.currentLanguage.subscribe((e) => {
      expect(app.currentLanguage.language).toBe(e.language);
    });
  });
});
