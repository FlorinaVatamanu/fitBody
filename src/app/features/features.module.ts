import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { TopMenuModule } from './components/top-menu/top-menu.module';

@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TopMenuModule
  ]
})

export class FeaturesModule {}