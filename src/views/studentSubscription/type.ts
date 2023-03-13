
export interface ICandidate {
    nome:string;
    sexo: string;
    dataNasc: string;
    contatoId:string;
    photoUrl:any;
    tipoIdentificacao:string;
    codigoDocumento: string;
    pdfIdentificacao: any;
    tipoCertificacaoEscolar: string;
    pdfCertificacaoEscolar:any;
}


interface IResponse {
    status: number;
    statusText: string;
    data: {
        error: string;
        status: number;
    }
}

export interface IError {
    message: string;
    name: string;
    stack: string;
    response: IResponse
}

export interface IContact {
    numeroTelefone: string;
    email: string;
}