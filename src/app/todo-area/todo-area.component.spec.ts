import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAreaComponent } from './todo-area.component';

describe('TodoAreaComponent', () => {
  let component: TodoAreaComponent;
  let fixture: ComponentFixture<TodoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
