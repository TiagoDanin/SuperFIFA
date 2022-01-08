import BaseHttpService from './BaseHttpService';

export default class WinnersService extends BaseHttpService {
  constructor() {
    super('/winners');
  }
}
