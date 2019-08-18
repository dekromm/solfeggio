import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { NoteButtonComponent } from './note-button/note-button.component';
import { AbcNoteComponent } from './abc-note/abc-note.component';
import { NoteGuesserComponent } from './note-guesser/note-guesser.component';
import { GuesserGameComponent } from './guesser-game/guesser-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    NoteButtonComponent,
    AbcNoteComponent,
    NoteGuesserComponent,
    GuesserGameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
