export type ApiErrorBody = {
  message?: string;
};

export type RequestOptions = {
  method?: string;
  body?: unknown;
  token?: string | null;
  headers?: Record<string, string>;
};
