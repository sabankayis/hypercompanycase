import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-grid-layout',
  standalone: true,
  imports: [RouterModule,CommonModule,HomeComponent,HeaderComponent,FooterComponent,SidebarComponent,MenuComponent,AppComponent],
  templateUrl: './grid-layout.component.html',
  styleUrl: './grid-layout.component.css'
})
export class GridLayoutComponent {
  headerBackgroundColor: string = 'yellow'; // Varsayılan arka plan rengi
  footerBackgroundColor: string = '#32E651'; // Varsayılan arka plan rengi

  onColorChange(color: string) {
    this.headerBackgroundColor = color; // Header arka plan rengini değiştir
    this.footerBackgroundColor = color; // Footer arka plan rengini değiştir
  }
}
