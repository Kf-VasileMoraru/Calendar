import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDark = false;
  theme = { ...this.themeService.value };

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    private readonly themeService: ThemeService,
  ) {}

  onChange(toggleChange: MatSlideToggleChange) {
    this.doc.body.classList.toggle('dark', toggleChange.checked);
    this.themeService.setDarkTheme(toggleChange.checked);
  }

  onChangeTheme(form: NgForm) {
    this.themeService.setTheme(form.value);
  }
}
