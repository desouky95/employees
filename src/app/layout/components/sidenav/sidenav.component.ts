import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/apis/auth/auth.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private lang: LanguageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleClose(): void {
    this.closeMenu.emit(true);
  }
  signout(): void {
    this.authService.signoutUser();
  }
}
