import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HostSwitcherExampleComponent } from './host-switcher-example.component';

describe('HostSwitcherExampleComponent', () => {
  let component: HostSwitcherExampleComponent;
  let fixture: ComponentFixture<HostSwitcherExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostSwitcherExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostSwitcherExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
