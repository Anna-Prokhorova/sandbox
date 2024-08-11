import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureMainComponent } from './feature-main.component';

describe('FeatureMainComponent', () => {
  let component: FeatureMainComponent;
  let fixture: ComponentFixture<FeatureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
