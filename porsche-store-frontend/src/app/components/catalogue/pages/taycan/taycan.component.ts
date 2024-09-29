import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PedidoService } from '../../../../services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taycan',
  templateUrl: './taycan.component.html',
  styleUrl: './taycan.component.scss'
})
export class TaycanComponent {
  image: string = '/assets/taycan-side.webp';
  pedidoForm!: FormGroup;

  constructor( private pedidoService : PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.pedidoForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      email: new FormControl(''),
      modeloCarro: new FormControl('Taycan'),
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
