import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterComponent } from './minister.component';

describe('MinisterComponent', () => {
  let component: MinisterComponent;
  let fixture: ComponentFixture<MinisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
