export class ResponseDto {
    statusCode: number;
    message: string;
    content: any;
  }
  
  export const success200 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 200;
    response.message = message;
    response.content = data;
    return response;
  }
  export const success201 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 201;
    response.message = message;
    response.content = data;
    return response;
  }
  export const success202 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 202;
    response.message = message;
    response.content = data;
    return response;
  }
  export const success203 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 203;
    response.message = message;
    response.content = data;
    return response;
  }
  export const success204 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 204;
    response.message = message;
    response.content = data;
    return response;
  }

  export const error400 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 400;
    response.message = message;
    response.content = data;
    return response;
  };
  export const error401 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 401;
    response.message = message;
    response.content = data;
    return response;
  };
  export const error402 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 402;
    response.message = message;
    response.content = data;
    return response;
  };
  export const error403 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 403;
    response.message = message;
    response.content = data;
    return response;
  };
  export const error404 = (message: string, data: any = null): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 404;
    response.message = message;
    response.content = data;
    return response;
  };
  
  export const failCode = (message: string): ResponseDto => {
    const response = new ResponseDto();
    response.statusCode = 500;
    response.message = message;
    return response;
  };