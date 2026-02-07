import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroceries } from './update-groceries';

describe('UpdateGroceries', () => {
  let component: UpdateGroceries;
  let fixture: ComponentFixture<UpdateGroceries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGroceries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGroceries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
