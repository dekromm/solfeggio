import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from '../music/notes.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-button',
  template: `<button mat-fab (click)=handleClick()>{{ note }}</button>`,
  styleUrls: ['./note-button.component.scss']
})
export class NoteButtonComponent implements OnInit {

  @Output() activate = new EventEmitter<void>();

  @Input() note: Notes;

  constructor() {}

  ngOnInit(): void {
  }

  handleClick(): void {
    this.activate.emit();
  }
}
