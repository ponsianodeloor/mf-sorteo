import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoPageComponent } from './sorteo-page.component';

describe('SorteoPageComponent', () => {
  let component: SorteoPageComponent;
  let fixture: ComponentFixture<SorteoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorteoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
