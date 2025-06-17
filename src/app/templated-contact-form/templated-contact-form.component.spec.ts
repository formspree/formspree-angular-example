import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedContactFormComponent } from './templated-contact-form.component';

describe('TemplatedContactFormComponent', () => {
  let component: TemplatedContactFormComponent;
  let fixture: ComponentFixture<TemplatedContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedContactFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatedContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
