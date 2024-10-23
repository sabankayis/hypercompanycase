import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() colorChange = new EventEmitter<string>(); // Renk değişimi için EventEmitter

  changeColor(color: string) {
    this.colorChange.emit(color); // Renk bilgisi gönder
  }
}
