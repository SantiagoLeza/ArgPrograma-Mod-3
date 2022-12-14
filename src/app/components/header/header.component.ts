import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService) { }

  public get isLogged(): boolean {
    return this.authService.isLogged;
  }

  public logout(): void {
    this.authService.logout();
  }
}
