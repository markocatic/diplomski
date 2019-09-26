import { TestBed } from '@angular/core/testing';

import { TransactionsAdminService } from './transactions-admin.service';

describe('TransactionsAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsAdminService = TestBed.get(TransactionsAdminService);
    expect(service).toBeTruthy();
  });
});
