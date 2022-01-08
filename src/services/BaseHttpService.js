import HTTPClient from './AxiosInstance';
import responseService from './ResponseService';

export default class BaseHttpService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.httpClient = HTTPClient;
    this.responseService = responseService;
  }

  list = async () => {
    try {
      const response = await this.httpClient.get(this.baseURL);
      return response.data;
    } catch (error) {
      throw this.responseService(error, 'list');
    }
  };

  show = async id => {
    try {
      const url = `${this.baseURL}/${id}`;
      const response = await this.httpClient.get(url);
      return response.data;
    } catch (error) {
      throw this.responseService(error, 'get', 'item');
    }
  };

  create = async data => {
    try {
      const response = await this.httpClient.post(this.baseURL, data);
      return response.data;
    } catch (error) {
      throw this.responseService(error, 'create');
    }
  };

  update = async data => {
    try {
      const url = `${this.baseURL}/${data.id}`;
      const response = await this.httpClient.put(url, data);
      return response.data;
    } catch (error) {
      throw this.responseService(error, 'update');
    }
  };

  remove = async data => {
    try {
      const url = `${this.baseURL}/${data.id}`;
      const response = await this.httpClient.delete(url);
      return response.data;
    } catch (error) {
      throw this.responseService(error, 'remove');
    }
  };
}
