import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepeatExampleComponent } from './repeat-example.component';

describe('RepeatExampleComponent', () => {
  let component: RepeatExampleComponent;
  let fixture: ComponentFixture<RepeatExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepeatExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
