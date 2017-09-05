import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIslandComponent } from './text-island.component';

describe('TextIslandComponent', () => {
  let component: TextIslandComponent;
  let fixture: ComponentFixture<TextIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
