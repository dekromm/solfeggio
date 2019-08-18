import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Notes } from '../music/notes.enum';

@Component({
  selector: 'app-note-guesser',
  templateUrl: './note-guesser.component.html',
  styleUrls: ['./note-guesser.component.scss']
})
export class NoteGuesserComponent implements OnInit {

  @Input() note: Notes;
  @Input() maxOptions = 3;

  /** true is emitted when the guess is correct, false is emitted elsewhere */
  @Output() guess = new EventEmitter<boolean>();

  optionNotes: Notes[] = [];

  ngOnInit(): void {
    const allNotes = Object.keys(Notes);
    this.optionNotes.push(this.note);
    while(this.optionNotes.length < this.maxOptions) {
      const otherNotes = allNotes.filter(v => this.optionNotes.indexOf(v as Notes) < 0 );
      const randomIndex = Math.floor(Math.random() * otherNotes.length);
      const randomNote = otherNotes[randomIndex];
      this.optionNotes.push(randomNote as Notes);
    }
  }

  guessNote(guessedNote: Notes): void {
    this.guess.emit(guessedNote === this.note);
  }
}
