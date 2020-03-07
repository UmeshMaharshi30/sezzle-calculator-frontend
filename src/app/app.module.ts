import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { AppComponent } from './app.component';
import { BoardComponent } from './component/calculator/board/board.component';
import { ButtonComponent } from './component/calculator/button/button.component';
import { CalculationsComponent } from './component/global/calculations/calculations.component';
import { RegistrationComponent } from './component/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ButtonComponent,
    CalculationsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
