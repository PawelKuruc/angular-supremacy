import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneAreaComponent } from './done-area.component';

describe('DoneAreaComponent', () => {
  let component: DoneAreaComponent;
  let fixture: ComponentFixture<DoneAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
