import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { HistorySectionComponent } from './components/history-section/history-section.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { GallerySectionComponent } from './components/gallery-section/gallery-section.component';
import { TestimonalsSectionComponent } from './components/testimonals-section/testimonals-section.component';


@NgModule({
  declarations: [
    PublicComponent,
    BannerComponent,
    HistorySectionComponent,
    MenuSectionComponent,
    GallerySectionComponent,
    TestimonalsSectionComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],

  exports:[
    PublicComponent
  ]
})
export class PublicModule { }
