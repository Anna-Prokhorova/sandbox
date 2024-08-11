import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDirectivesComponent } from './feature-directives.component';

describe('FeatureDirectivesComponent', () => {
  let component: FeatureDirectivesComponent;
  let fixture: ComponentFixture<FeatureDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDirectivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
