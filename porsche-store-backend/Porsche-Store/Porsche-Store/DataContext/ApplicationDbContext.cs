using Microsoft.EntityFrameworkCore;
using Porsche_Store.Models;

namespace Porsche_Store.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<PedidoModel> Pedidos { get; set; }
    }
}
