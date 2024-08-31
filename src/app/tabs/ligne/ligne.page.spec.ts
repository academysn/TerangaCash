import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LignePage } from './ligne.page';

describe('LignePage', () => {
  let component: LignePage;
  let fixture: ComponentFixture<LignePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LignePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
