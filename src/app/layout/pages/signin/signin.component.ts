import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/apis/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  currentLanguage: any;
  constructor(
    private lang: LanguageService,
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.lang.currentLanguage.subscribe(
      (e) => (this.currentLanguage = e.language)
    );
  }

  updateLanguage(value: string): void {
    this.lang.setLanguage(value);
  }

  async signin() {
    const isExist = await this.authService.signinUser(this.signinForm.value);
    if (isExist) {
      this.localStorage.setItem('user', JSON.stringify(isExist));
      this.router.navigate(['/'])
    }
  }
}
