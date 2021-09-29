import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesevaservicesComponent } from './meesevaservices.component';

describe('MeesevaservicesComponent', () => {
  let component: MeesevaservicesComponent;
  let fixture: ComponentFixture<MeesevaservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeesevaservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeesevaservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
