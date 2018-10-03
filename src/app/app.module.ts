import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { AppRoutingModule } from './app-routing.module';
import { EditFormComponent } from './complaint-form/edit-form/edit-form.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ComplaintFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxLoadingModule.forRoot({})
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
