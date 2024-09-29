using System.Text.Json.Serialization;

namespace Porsche_Store.Enum
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ModeloCarroEnum
    {
        _718,
        _911,
        Taycan,
        Panamera,
        Macan,
        Cayenne
    }
}
