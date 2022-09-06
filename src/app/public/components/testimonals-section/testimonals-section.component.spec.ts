import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalsSectionComponent } from './testimonals-section.component';

describe('TestimonalsSectionComponent', () => {
  let component: TestimonalsSectionComponent;
  let fixture: ComponentFixture<TestimonalsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonalsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonalsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
