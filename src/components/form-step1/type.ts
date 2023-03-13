export interface IResponse {
    status: number;
    statusText: string;
    data: {
        error: string;
        status: number;
    }
}

export interface IErrorInterface {
    message: string;
    name: string;
    stack: string;
    response: IResponse
}
