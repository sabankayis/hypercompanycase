import { Component,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flex-layout',
  standalone: true,
  imports: [RouterModule,CommonModule,HomeComponent,HeaderComponent,FooterComponent,SidebarComponent,MenuComponent,AppComponent],
  templateUrl: './flex-layout.component.html',
  styleUrl: './flex-layout.component.css'
})
export class FlexLayoutComponent {
  constructor(){

  }
  headerBackgroundColor: string = 'yellow'; // Varsayılan arka plan rengi
  footerBackgroundColor: string = '#32E651'; // Varsayılan arka plan rengi

  onColorChange(color: string) {
    this.headerBackgroundColor = color;
    this.footerBackgroundColor = color; 
  }
}
