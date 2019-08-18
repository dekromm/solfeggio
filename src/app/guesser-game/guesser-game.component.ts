import { Component, OnInit, Input } from '@angular/core';
import { Notes } from '../music/notes.enum';

@Component({
  selector: 'app-guesser-game',
  templateUrl: './guesser-game.component.html',
  styleUrls: ['./guesser-game.component.scss']
})
export class GuesserGameComponent implements OnInit {

  hit = 0;
  miss = 0;
  generatedNote: Notes;
  @Input() retry = false;

  constructor() { }

  ngOnInit() {
    this.generatedNote = randomNote();
  }

  handleGuess(success: boolean) {
    if (success) {
      this.hit++;
      this.generatedNote = randomNote();
    } else {
      this.miss++;
      if(!this.retry) {
        this.generatedNote = randomNote();
      }
    }
  }

}

function randomNote(): Notes {
  const allNotes = Object.keys(Notes).map(v => v as Notes);
  const randomIndex = Math.floor(Math.random() * allNotes.length);
  return allNotes[randomIndex];
}
