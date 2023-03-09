
export interface ICandidate {
    nomeCompleto:string
    generoId: string;
    dataNasc: string;
    numeroBi: string;
    contactoId?:string;
    numeroTelefone:string;
    email:string ;
    pdfBi:string;
    pdfCertificado: string;
    pdfDeclaracao:string;
    photoUrl:File | null;
    descricao:string;
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