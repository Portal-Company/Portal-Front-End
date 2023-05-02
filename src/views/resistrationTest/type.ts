
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

export interface Values {
    nomeCompleto:string;
    sexo:string;
    dataNasc:string;
    numeroTelefone:string;
    email:string;
    tipoIdentificacao:string;
    tipoCertificacaoEscolar:string;
    codigoDocumento:string;
    photo: any;
    pdfIdentificacao:any;
    pdfCertificacaoEscolar:any;
    cursoId:string;
}

export interface ValuesR{
    data:Values;
}