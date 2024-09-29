using Porsche_Store.Models;

namespace Porsche_Store.Services
{
    public interface IPedidosInterface
    {
        // get de todos os pedidos
        Task<ServiceResponse<List<PedidoModel>>> GetPedidos();

        // post de um novo pedido
        Task<ServiceResponse<List<PedidoModel>>> CreatePedido(PedidoModel novoPedido);
        
        // get pedido por id
        Task<ServiceResponse<PedidoModel>> GetPedidoById(int id);

        // update do pedido
        Task<ServiceResponse<List<PedidoModel>>> UpdatePedido(PedidoModel editadoPedido);

        // delete do pedido
        Task<ServiceResponse<List<PedidoModel>>> DeletePedido(int id);

        // inativa pedido
        Task<ServiceResponse<List<PedidoModel>>> InativaPedido(int id);
    }
}
