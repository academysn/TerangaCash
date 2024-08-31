import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OmoneyPage } from './omoney.page';

describe('OmoneyPage', () => {
  let component: OmoneyPage;
  let fixture: ComponentFixture<OmoneyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
