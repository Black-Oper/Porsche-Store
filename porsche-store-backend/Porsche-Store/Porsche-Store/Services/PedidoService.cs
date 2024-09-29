using Microsoft.EntityFrameworkCore;
using Porsche_Store.DataContext;
using Porsche_Store.Models;

namespace Porsche_Store.Services
{
    public class PedidoService : IPedidosInterface
    {
        // injeção de dependência para ligar com o banco de dados
        private readonly ApplicationDbContext _context;
        public PedidoService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<PedidoModel>>> CreatePedido(PedidoModel novoPedido)
        {
            // retornar lista de service response
            ServiceResponse<List<PedidoModel>> serviceResponse = new ServiceResponse<List<PedidoModel>>();

            try
            {
                if(novoPedido == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Informar dados.";
                    serviceResponse.Sucesso = false;

                    return serviceResponse;
                }

                _context.Add(novoPedido);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Pedidos.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<PedidoModel>>> DeletePedido(int id)
        {
            // retornar lista de service response
            ServiceResponse<List<PedidoModel>> serviceResponse = new ServiceResponse<List<PedidoModel>>();

            try
            {   
                PedidoModel pedido = _context.Pedidos.SingleOrDefault(x => x.Id == id);

                if (pedido == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuário não localizado.";
                    serviceResponse.Sucesso = false;

                    return serviceResponse;
                }

                _context.Pedidos.Remove(pedido);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Pedidos.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<PedidoModel>> GetPedidoById(int id)
        {
            ServiceResponse<PedidoModel> serviceResponse = new ServiceResponse<PedidoModel>();

            try
            {
                PedidoModel pedido = _context.Pedidos.SingleOrDefault(x => x.Id == id);

                if (pedido == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuário não localizado.";
                    serviceResponse.Sucesso = false;
                }

                serviceResponse.Dados = pedido;
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<PedidoModel>>> GetPedidos()
        {
            // retornar lista de service response
            ServiceResponse<List<PedidoModel>> serviceResponse = new ServiceResponse<List<PedidoModel>>();

            try
            {
                serviceResponse.Dados = _context.Pedidos.ToList();

                if(serviceResponse.Dados.Count == 0)
                {
                    serviceResponse.Mensagem = "Nenhum dado encontrado.";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<PedidoModel>>> InativaPedido(int id)
        {
            ServiceResponse<List<PedidoModel>> serviceResponse = new ServiceResponse<List<PedidoModel>>();

            try
            {
                PedidoModel pedido = _context.Pedidos.FirstOrDefault(x => x.Id == id);

                if(pedido == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuário não encontrado.";
                    serviceResponse.Sucesso = false;
                }

                pedido.Ativo = false;
                pedido.DataDeAlteracao = DateTime.Now.ToLocalTime();

                _context.Pedidos.Update(pedido);

                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Pedidos.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<PedidoModel>>> UpdatePedido(PedidoModel editadoPedido)
        {
            ServiceResponse<List<PedidoModel>> serviceResponse = new ServiceResponse<List<PedidoModel>>();

            try
            {
                PedidoModel pedido = _context.Pedidos.AsNoTracking().FirstOrDefault(x => x.Id == editadoPedido.Id);

                if(pedido == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuário não localizado.";
                    serviceResponse.Sucesso = false;
                }

                pedido.DataDeAlteracao = DateTime.Now.ToLocalTime();

                _context.Pedidos.Update(editadoPedido);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Pedidos.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }
    }
}
