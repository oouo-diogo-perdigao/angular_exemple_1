import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSelectorComponent } from './analysis-selector.component';

describe('AnalysisSelectorComponent', () => {
  let component: AnalysisSelectorComponent;
  let fixture: ComponentFixture<AnalysisSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalysisSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
