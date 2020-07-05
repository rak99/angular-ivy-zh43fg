import { Component } from '@angular/core';
import { FlipAnimation } from '../animations'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: FlipAnimation.animations
})
export class AppComponent {

  flip = 'inactive';

  toggleFlip() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
  
}