import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { TransferService } from './transfer.service';
import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, jqxLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
