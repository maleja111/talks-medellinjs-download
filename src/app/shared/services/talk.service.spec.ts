import { TestBed, inject } from '@angular/core/testing';

import { TalkService } from './talk.service';

describe('TalkTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalkService]
    });
  });

  it('should ...', inject([TalkService], (service: TalkService) => {
    expect(service).toBeTruthy();
  }));
});
