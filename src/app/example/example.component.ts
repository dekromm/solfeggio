import { Component, OnInit } from '@angular/core';
import { Notes } from '../music/notes.enum';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  note: Notes;

  constructor() { }

  ngOnInit() {
    this.setRandomNote();
  }

  setRandomNote(): void {
    const notesKeys = Object.values(Notes) as unknown as Notes[];
    this.note = notesKeys[Math.floor(Math.random() * notesKeys.length)];
  }
}
