import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacaoPage } from './informacao.page';

describe('InformacaoPage', () => {
  let component: InformacaoPage;
  let fixture: ComponentFixture<InformacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
