import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobApplicantsComponent } from './list-job-applicants.component';

describe('ListJobApplicantsComponent', () => {
  let component: ListJobApplicantsComponent;
  let fixture: ComponentFixture<ListJobApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
