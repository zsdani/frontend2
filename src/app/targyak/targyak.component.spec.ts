import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargyakComponent } from './targyak.component';

describe('TargyakComponent', () => {
  let component: TargyakComponent;
  let fixture: ComponentFixture<TargyakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargyakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
