import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListenComponent } from './book-listen.component';

describe('BookListenComponent', () => {
  let component: BookListenComponent;
  let fixture: ComponentFixture<BookListenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
