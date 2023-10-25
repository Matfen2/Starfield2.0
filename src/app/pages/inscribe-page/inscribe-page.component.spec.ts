import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribePageComponent } from './inscribe-page.component';

describe('InscribePageComponent', () => {
  let component: InscribePageComponent;
  let fixture: ComponentFixture<InscribePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscribePageComponent]
    });
    fixture = TestBed.createComponent(InscribePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
