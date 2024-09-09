import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoCategoryPageComponent } from './sorteo-category-page.component';

describe('SorteoCategoryPageComponent', () => {
  let component: SorteoCategoryPageComponent;
  let fixture: ComponentFixture<SorteoCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorteoCategoryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
