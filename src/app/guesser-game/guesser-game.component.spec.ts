import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesserGameComponent } from './guesser-game.component';

describe('GuesserGameComponent', () => {
  let component: GuesserGameComponent;
  let fixture: ComponentFixture<GuesserGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuesserGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuesserGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
