import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestonimalsComponent } from './testonimals.component';

describe('TestonimalsComponent', () => {
  let component: TestonimalsComponent;
  let fixture: ComponentFixture<TestonimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestonimalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestonimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
