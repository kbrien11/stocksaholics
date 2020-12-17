import BaseService from './BaseService';

class FinancialModelingService {
  static serviceContext = 'https://financialmodelingprep.com/api/v3';
  static token = '';

  static async search(searchParam) {
    return BaseService.extGET(
      `${this.serviceContext}/search?query=${searchParam}&limit=6&exchange=NASDAQ&apikey=${this.token}`
    );
  }
}

export default FinancialModelingService;
