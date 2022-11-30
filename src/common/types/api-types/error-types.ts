export interface IResponseError {
  code: string;
  message: string;
  fields?: IFieldsResponseError[];
}

interface IFieldsResponseError {
  field: string;
  code: string;
}
