import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ]
})

export class HomePageModule {}