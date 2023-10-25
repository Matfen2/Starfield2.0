import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreReleasePageComponent } from './pre-release-page.component';

describe('PreReleasePageComponent', () => {
  let component: PreReleasePageComponent;
  let fixture: ComponentFixture<PreReleasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreReleasePageComponent]
    });
    fixture = TestBed.createComponent(PreReleasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
