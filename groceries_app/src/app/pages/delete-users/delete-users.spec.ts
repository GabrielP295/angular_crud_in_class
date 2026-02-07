import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsers } from './delete-users';

describe('DeleteUsers', () => {
  let component: DeleteUsers;
  let fixture: ComponentFixture<DeleteUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
