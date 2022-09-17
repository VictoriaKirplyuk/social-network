export interface IResponseError {
  code?: string;
  fields?: IFieldsResponseError[];
  message?: string;
}

interface IFieldsResponseError {
  field: string;
  code: string;
}
