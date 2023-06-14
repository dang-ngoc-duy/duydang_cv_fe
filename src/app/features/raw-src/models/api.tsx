import { contentType } from 'app/utils';
import { apiGet } from 'app/utils/api';

export const fetchDataXml = (params: string) => {
  return apiGet<string>(params, { Accept: '*/*', ...contentType('text/html') });
};
