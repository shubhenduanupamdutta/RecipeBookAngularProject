import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  toLoadFeature: string = 'recipe';

  onNavigate(feature: string) {
    this.toLoadFeature = feature;
  }
}
