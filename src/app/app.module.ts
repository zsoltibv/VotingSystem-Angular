import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingPanelComponent } from './components/voting-panel/voting-panel.component';
import { VoterComponent } from './components/voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingPanelComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
