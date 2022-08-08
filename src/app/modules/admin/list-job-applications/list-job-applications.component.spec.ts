import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobApplicationsComponent } from './list-job-applications.component';

describe('ListJobApplicationsComponent', () => {
  let component: ListJobApplicationsComponent;
  let fixture: ComponentFixture<ListJobApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
