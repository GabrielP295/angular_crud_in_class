import { TestBed } from '@angular/core/testing';

import { GroceriesDatabase } from './groceries-database';

describe('GroceriesDatabase', () => {
  let service: GroceriesDatabase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceriesDatabase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
