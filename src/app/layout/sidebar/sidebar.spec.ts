import { TestBed } from '@angular/core/testing';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Sidebar);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
