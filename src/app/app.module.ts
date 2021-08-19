import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiProductService } from './services/api-product.service';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
  ],
  providers: [ApiProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
