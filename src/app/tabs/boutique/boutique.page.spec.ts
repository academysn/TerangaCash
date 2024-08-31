import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoutiquePage } from './boutique.page';

describe('BoutiquePage', () => {
  let component: BoutiquePage;
  let fixture: ComponentFixture<BoutiquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoutiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
