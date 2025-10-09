import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextUsComponent } from './text-us.component';

describe('TextUsComponent', () => {
  let component: TextUsComponent;
  let fixture: ComponentFixture<TextUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
