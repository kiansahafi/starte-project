import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/components/login/login.component';
import { ProductPageComponent } from './login/components/product-page/product-page.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ProductPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    CarouselModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
