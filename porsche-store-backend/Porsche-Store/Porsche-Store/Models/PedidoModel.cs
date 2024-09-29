using Porsche_Store.Enum;
using System.ComponentModel.DataAnnotations;

namespace Porsche_Store.Models
{
    public class PedidoModel
    {

        [Key]
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Sobrenome { get; set; }

        public string Email {  get; set; }

        public ModeloCarroEnum ModeloCarro { get; set; }

        public bool Ativo { get; set; }

        public DateTime DataDeCriacao { get; set; } = DateTime.Now.ToLocalTime();

        public DateTime DataDeAlteracao { get; set; } = DateTime.Now.ToLocalTime();
    }
}
