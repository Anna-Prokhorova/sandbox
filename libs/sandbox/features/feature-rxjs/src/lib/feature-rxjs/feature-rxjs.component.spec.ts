import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureRxjsComponent } from './feature-rxjs.component';

describe('FeatureRxjsComponent', () => {
  let component: FeatureRxjsComponent;
  let fixture: ComponentFixture<FeatureRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureRxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
