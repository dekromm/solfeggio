import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGuesserComponent } from './note-guesser.component';

describe('NoteGuesserComponent', () => {
  let component: NoteGuesserComponent;
  let fixture: ComponentFixture<NoteGuesserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteGuesserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
