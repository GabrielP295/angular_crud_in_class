import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroceries } from './delete-groceries';

describe('DeleteGroceries', () => {
  let component: DeleteGroceries;
  let fixture: ComponentFixture<DeleteGroceries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGroceries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGroceries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
