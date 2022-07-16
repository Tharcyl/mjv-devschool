import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresListComponent } from './colaboradores-list.component';

describe('ColaboradoresListComponent', () => {
  let component: ColaboradoresListComponent;
  let fixture: ComponentFixture<ColaboradoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
