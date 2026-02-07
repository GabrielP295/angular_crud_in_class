import { TestBed } from '@angular/core/testing';

import { UserDatabase } from './user-database';

describe('UserDatabase', () => {
  let service: UserDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
