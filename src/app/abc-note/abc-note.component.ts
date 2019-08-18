import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as ABCJS from 'abcjs';
import { Notes } from '../music/notes.enum';

@Component({
  selector: 'app-abc-note',
  templateUrl: './abc-note.component.html',
  styleUrls: ['./abc-note.component.scss']
})
export class AbcNoteComponent implements OnChanges {

  @Input() note: Notes;

  @ViewChild('container', {static: true}) container: ElementRef;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    const abc = `${this.note}2`;
    ABCJS.renderAbc(this.container.nativeElement, abc);
  }

}
