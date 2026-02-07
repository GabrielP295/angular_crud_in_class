import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroceries } from './create-groceries';

describe('CreateGroceries', () => {
  let component: CreateGroceries;
  let fixture: ComponentFixture<CreateGroceries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGroceries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroceries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
