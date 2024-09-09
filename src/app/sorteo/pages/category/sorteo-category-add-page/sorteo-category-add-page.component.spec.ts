import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoCategoryAddPageComponent } from './sorteo-category-add-page.component';

describe('SorteoCategoryAddPageComponent', () => {
  let component: SorteoCategoryAddPageComponent;
  let fixture: ComponentFixture<SorteoCategoryAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorteoCategoryAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoCategoryAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
