import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnRecipeComponent } from './own-recipe.component';

describe('OwnRecipeComponent', () => {
  let component: OwnRecipeComponent;
  let fixture: ComponentFixture<OwnRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnRecipeComponent]
    });
    fixture = TestBed.createComponent(OwnRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
