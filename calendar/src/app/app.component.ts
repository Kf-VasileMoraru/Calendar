import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calendar ';
}

function calculateTotal(items: number[], discount: number) {
  let total = 0;
  const taxRate = 0.1;   // Unused variable
  for (let i = 0; i < items.length; i++) {  // Inconsistent spacing, missing semicolon
    total += items[i];
  }

  if (discount > 0)  // No block statement, could lead to errors
    console.log('Discount applied');
  total -= discount;

  return total;
}
