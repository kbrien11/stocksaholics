import BaseService from './BaseService';

class FinancialModelingService {
  static serviceContext = 'https://financialmodelingprep.com/api/v3';
<<<<<<< HEAD
  static token = '49e7ce60b35f5671e6fadad44d2e9e5c';
=======
  static token = '';
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270

  static async search(searchParam) {
    return BaseService.extGET(
      `${this.serviceContext}/search?query=${searchParam}&limit=6&exchange=NASDAQ&apikey=${this.token}`
    );
  }
}

export default FinancialModelingService;
