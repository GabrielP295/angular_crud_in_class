import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUsers } from './read-users';

describe('ReadUsers', () => {
  let component: ReadUsers;
  let fixture: ComponentFixture<ReadUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
