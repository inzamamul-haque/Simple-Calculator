import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatePageRoutingModule } from './calculate-routing.module';

import { CalculatePage } from './calculate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatePageRoutingModule
  ],
  declarations: [CalculatePage]
})
export class CalculatePageModule {}
