import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragByScrollExampleComponent } from './drag-by-scroll-example.component';

describe('DragByScrollExampleComponent', () => {
  let component: DragByScrollExampleComponent;
  let fixture: ComponentFixture<DragByScrollExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragByScrollExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DragByScrollExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
