import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotAProjectComponent } from './got-a-project.component';

describe('GotAProjectComponent', () => {
  let component: GotAProjectComponent;
  let fixture: ComponentFixture<GotAProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotAProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotAProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
