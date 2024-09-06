import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  currentUrl: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  value = 'clear me'

  ngOnInit() {
    // Obtener la URL actual directamente
    this.currentUrl = this.router.url;

    // Suscribirse a los cambios de la ruta
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        this.currentUrl = this.router.url;
        console.log('Ruta actual:', this.currentUrl);
      }
    });
  }
}
