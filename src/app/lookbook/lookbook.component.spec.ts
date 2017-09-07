import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookbookComponent } from './lookbook.component';

describe('LookbookComponent', () => {
  let component: LookbookComponent;
  let fixture: ComponentFixture<LookbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
