import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAndDataBindingComponent } from './template-and-data-binding.component';

describe('TemplateAndDataBindingComponent', () => {
  let component: TemplateAndDataBindingComponent;
  let fixture: ComponentFixture<TemplateAndDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAndDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAndDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
