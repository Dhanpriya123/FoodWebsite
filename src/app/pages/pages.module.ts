import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenupageComponent } from './menupage/menupage.component';






@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    BrowserModule
  ]
})
export class PagesModule { }
