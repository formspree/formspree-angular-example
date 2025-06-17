import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveContactFormComponent } from './reactive-contact-form.component';

describe('ReactiveContactFormComponent', () => {
  let component: ReactiveContactFormComponent;
  let fixture: ComponentFixture<ReactiveContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveContactFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
