import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/Pedido';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private ApiUrl = `${environment.ApiUrl}Pedido`

  constructor( private http: HttpClient) { }

  GetPedidos() : Observable<Response<Pedido[]>>{
    return this.http.get<Response<Pedido[]>>(this.ApiUrl);
  }

  CreatePedido(pedido: Pedido) : Observable<Response<Pedido[]>>{
    return this.http.post<Response<Pedido[]>>(this.ApiUrl, pedido);
  }

  RemovePedido(id: number) : Observable<Response<Pedido[]>>{
    return this.http.delete<Response<Pedido[]>>(`${this.ApiUrl}/deleteFuncionario/${id}`);
  }

  UpdatePedido(pedido: Pedido) : Observable<Response<Pedido[]>> {
    return this.http.put<Response<Pedido[]>>(`${this.ApiUrl}/updatePedido`, pedido);
  }  
}
