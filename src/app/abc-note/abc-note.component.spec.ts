import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcNoteComponent } from './abc-note.component';

describe('AbcNoteComponent', () => {
  let component: AbcNoteComponent;
  let fixture: ComponentFixture<AbcNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
