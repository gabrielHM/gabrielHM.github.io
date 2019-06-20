import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatCardModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


import { ExampleDirective } from './example.directive';
import { FormComponent } from './form.component';
import { ExampleService } from './app.service';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    ExampleDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    routing,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatCardModule, MatListModule, MatDividerModule, MatExpansionModule
  ],
  providers: [
    ExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
