import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './product-dashboard/product-widget/product-widget.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
