declare namespace Express {
  export interface Request {
    file_exist?: boolean;
    error?: boolean;
    errMsg?: string[];
  }
}
