
interface ISchoolData {
    id: string;
    nome: string;
    logo: string;
    nif: string;
    fotoUrl: string;
    historial: IHistoral;
    Localizacao: ILocalizacao;
    Categoria: ICategoria;
    Inscricao: [];
    actividade: IActividade[];
}

type ICategoria = {
    id: string;
    nome: string;
    AreaDeFormacao: [
        {
            id: string;
            nome: string;
            fotoUrl: string;
            descricao: string;
        }
    ]
}

type IHistoral = {
    id: string;
    fundador: string;
    descricao: string;
    data: string;
    fotoUrl: string;
    fotoUrl2: string;
    fotoUrl3: string;
    fotoUrl4: string;
}

type ILocalizacao = {
    id: string;
    Provincia: {
        id: string;
        nome: string;
    };
    endereco1: string;
    endereco2: string;
}

type IActividade = {
    id: string;
    nome: string;
    data: string;
    fotoUrl: string;
    organizador: string;
}



export type { ISchoolData }