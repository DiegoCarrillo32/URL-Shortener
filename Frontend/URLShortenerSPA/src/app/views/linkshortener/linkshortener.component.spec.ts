import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkshortenerComponent } from './linkshortener.component';

describe('LinkshortenerComponent', () => {
  let component: LinkshortenerComponent;
  let fixture: ComponentFixture<LinkshortenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkshortenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkshortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
