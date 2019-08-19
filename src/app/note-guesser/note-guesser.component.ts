import { Component, EventEmitter, OnChanges, Input, Output } from '@angular/core';
import { Notes } from '../music/notes.enum';

@Component({
  selector: 'app-note-guesser',
  templateUrl: './note-guesser.component.html',
  styleUrls: ['./note-guesser.component.scss']
})
export class NoteGuesserComponent implements OnChanges {

  @Input() note: Notes;
  @Input() maxOptions = 3;

  /** true is emitted when the guess is correct, false is emitted elsewhere */
  @Output() guess = new EventEmitter<boolean>();

  optionNotes: Notes[];

  ngOnChanges(): void {
    this.optionNotes = [];
    const allNotes = Object.keys(Notes).map(v => v as Notes);
    this.optionNotes.push(this.note);
    while(this.optionNotes.length < this.maxOptions) {
      const otherNotes = allNotes.filter(v => this.optionNotes.indexOf(v) < 0 );
      const randomIndex = Math.floor(Math.random() * otherNotes.length);
      const randomNote = otherNotes[randomIndex];
      this.optionNotes.push(randomNote);
    }
    shuffle(this.optionNotes);
  }

  guessNote(guessedNote: Notes): void {
    this.guess.emit(guessedNote === this.note);
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

