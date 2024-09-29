using Microsoft.AspNetCore.Mvc;
using Porsche_Store.Models;
using Porsche_Store.Services;

namespace Porsche_Store.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        // injeção de dependencia para acessar a interface
        private readonly IPedidosInterface _pedidosInterface;
        public PedidoController(IPedidosInterface pedidosInterface)
        {
            _pedidosInterface = pedidosInterface;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<PedidoModel>>>> GetPedidos()
        {
            return Ok( await _pedidosInterface.GetPedidos());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<List<PedidoModel>>>> GetPedidoById(int id)
        {
            return Ok(await _pedidosInterface.GetPedidoById(id));
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<PedidoModel>>>> CreatePedido(PedidoModel novoPedido)
        {
            return Ok( await _pedidosInterface.CreatePedido(novoPedido));
        }

        [HttpPut("updatePedido/{id}")]
        public async Task<ActionResult<ServiceResponse<List<PedidoModel>>>> UpdatePedido(PedidoModel editadoPedido)
        {
            return Ok( await _pedidosInterface.UpdatePedido(editadoPedido));
        }

        [HttpPut("inativaPedido/{id}")]
        public async Task<ActionResult<ServiceResponse<List<PedidoModel>>>> InativaPedido(int id)
        {
            return Ok( await _pedidosInterface.InativaPedido(id));
        }

        [HttpDelete("deleteFuncionario/{id}")]
        public async Task<ActionResult<ServiceResponse<List<PedidoModel>>>> DeletePedido(int id)
        {
            return Ok( await _pedidosInterface.DeletePedido(id));
        }
    }
}
