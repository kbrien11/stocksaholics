class BaseService {
  static serviceContext = 'http://127.0.0.1:5000/api';
  static token = sessionStorage.getItem('token');

  static async GET(URL) {
    const response = await fetch(
      `${this.serviceContext}/${URL}/${this.token}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token
        }
      }
    );
    if (response.status !== 200) {
      console.log('There was a problem: ' + response);
    } else {
      return response.json();
    }
  }

  static async POST(URL, data) {
    const response = await fetch(this.serviceContext + URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    if (response.status !== 200) {
      console.log('There was a problem: ' + response);
    } else {
      return response.json();
    }
  }

  static async UPDATE(URL, data) {
    const response = await fetch(this.serviceContext + URL, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    if (response.status !== 200) {
      console.log('There was a problem: ' + response);
    } else {
      return response.json();
    }
  }

  static async DELTE(URL, data) {
    const response = await fetch(this.serviceContext + URL, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.token
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    if (response.status !== 200) {
      console.log('There was a problem: ' + response);
    } else {
      return response.json();
    }
  }
}

export default BaseService;
