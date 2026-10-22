import { TestBed } from '@angular/core/testing';
import { Page } from './page';

describe('Page', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Page);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
