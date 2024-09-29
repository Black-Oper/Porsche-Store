import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidoService } from '../../../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panamera',
  templateUrl: './panamera.component.html',
  styleUrl: './panamera.component.scss'
})
export class PanameraComponent {
  image: string = '/assets/panamera-side.webp';
  pedidoForm!: FormGroup;

  constructor( private pedidoService : PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.pedidoForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      email: new FormControl(''),
      modeloCarro: new FormControl('Panamera'),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }

  changeImage(image: string) {
    this.image = image;
  }

  submit(){
    this.pedidoService.CreatePedido(this.pedidoForm.value).subscribe((data) => {
      this.router.navigate(['/catalogue']);
    });
  }
}
