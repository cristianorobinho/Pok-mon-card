import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacaoPageRoutingModule } from './informacao-routing.module';

import { InformacaoPage } from './informacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacaoPageRoutingModule
  ],
  declarations: [InformacaoPage]
})
export class InformacaoPageModule {}
