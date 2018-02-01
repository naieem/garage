import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteItemListComponent } from './favourite-item-list.component';

describe('FavouriteItemListComponent', () => {
  let component: FavouriteItemListComponent;
  let fixture: ComponentFixture<FavouriteItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
