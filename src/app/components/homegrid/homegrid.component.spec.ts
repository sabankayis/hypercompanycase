import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegridComponent } from './homegrid.component';

describe('HomegridComponent', () => {
  let component: HomegridComponent;
  let fixture: ComponentFixture<HomegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomegridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
