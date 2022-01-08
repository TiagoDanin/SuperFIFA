import AsyncStorage from '@react-native-community/async-storage';
import BaseHttpService from './BaseHttpService';

export default class AuthenticationService extends BaseHttpService {
  constructor() {
    super('/login');
  }

  login = async login => {
    try {
      const url = `${this.baseURL}`;
      const body = {
        email: login.email,
        password: login.password,
      };

      const response = await this.httpClient.post(url, body);

      await AsyncStorage.setItem('authentication:user', login.email);
      await AsyncStorage.setItem('authentication:token', response.data.Token);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        throw new Error('Senha ou email incorreto!');
      }

      throw this.responseService(error, 'login');
    }
  };
}
