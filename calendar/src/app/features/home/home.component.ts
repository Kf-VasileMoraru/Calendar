import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../shared/components/page-layout.component';
import { MatMenuItem } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [PageLayoutComponent, MatMenuItem, MatButton],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
