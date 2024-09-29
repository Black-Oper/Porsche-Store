import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/Pedido';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pedidos: Pedido[] = [];
  pedidosGeral: Pedido[] = [];
  currentPedido: Pedido | null = null;

  detalhesPedido = false;
  editarPedido = false;

  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  modeloCarro: string = '';
  status: string = '';
  dataDeCriacao = new Date().toLocaleDateString('pt-BR');
  dataDeAlteracao = new Date().toLocaleDateString('pt-BR');

  constructor(private pedidoService: PedidoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pedidoService.GetPedidos().subscribe(data => {
      this.pedidos = data.dados.map(item => {
        return {
          ...item,
          dataDeCriacao: new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR'),
          dataDeAlteracao: new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
        };
      });
      this.pedidosGeral = [...this.pedidos];
    });
  }

  remove(id: number) {
    this.pedidoService.RemovePedido(id).subscribe(() => {
      this.pedidos = this.pedidos.filter(item => item.id !== id);
    });
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.pedidos = this.pedidosGeral.filter(item => item.nome.toLowerCase().includes(value.toLowerCase()));
  }

  showDetails(pedido: Pedido) {
    this.editarPedido = false;
    this.detalhesPedido = true;

    this.nome = pedido.nome;
    this.sobrenome = pedido.sobrenome;
    this.email = pedido.email;
    this.modeloCarro = pedido.modeloCarro;
    this.status = pedido.ativo ? 'Ativo' : 'Inativo';
    this.dataDeCriacao = pedido.dataDeCriacao || '';
    this.dataDeAlteracao = pedido.dataDeAlteracao || '';
  }

  showEdit(pedido: Pedido) {
    this.detalhesPedido = false;
    this.editarPedido = true;
    this.currentPedido = pedido;

    this.nome = pedido.nome;
    this.sobrenome = pedido.sobrenome;
    this.email = pedido.email;
    this.modeloCarro = pedido.modeloCarro;
    this.status = pedido.ativo ? 'Ativo' : 'Inativo';
  }

  updatePedido() {
    if (this.currentPedido) {
      const updatedPedido: Pedido = {
        ...this.currentPedido,
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        modeloCarro: this.modeloCarro,
        ativo: this.status === 'Ativo'
      };

      this.pedidoService.UpdatePedido(updatedPedido).subscribe(() => {
        this.pedidos = this.pedidos.map(pedido => 
          pedido.id === updatedPedido.id ? updatedPedido : pedido
        );
        this.editarPedido = false;
        this.currentPedido = null;
      });
    }
  }
}
