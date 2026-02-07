import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGroceries } from './read-groceries';

describe('ReadGroceries', () => {
  let component: ReadGroceries;
  let fixture: ComponentFixture<ReadGroceries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadGroceries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadGroceries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
