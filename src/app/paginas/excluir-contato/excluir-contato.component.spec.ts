import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirContatoComponent } from './excluir-contato.component';

describe('ExcluirContatoComponent', () => {
  let component: ExcluirContatoComponent;
  let fixture: ComponentFixture<ExcluirContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
