export interface Pedido {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    modeloCarro: string;
    ativo: boolean;
    dataDeCriacao?: string;
    dataDeAlteracao?: string;
} 