import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/apis/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      providers: [LanguageService, AuthService, LocalStorageService, Router],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
