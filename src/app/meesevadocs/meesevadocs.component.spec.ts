import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesevadocsComponent } from './meesevadocs.component';

describe('MeesevadocsComponent', () => {
  let component: MeesevadocsComponent;
  let fixture: ComponentFixture<MeesevadocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeesevadocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeesevadocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
