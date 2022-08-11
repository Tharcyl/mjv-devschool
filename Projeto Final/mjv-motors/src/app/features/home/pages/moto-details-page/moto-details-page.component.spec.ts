import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDetailsPageComponent } from './moto-details-page.component';

describe('MotoDetailsPageComponent', () => {
  let component: MotoDetailsPageComponent;
  let fixture: ComponentFixture<MotoDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
