import {BaseUrl} from './NetworkUrl';

const get = urlOption => {
  return fetch(BaseUrl + urlOption, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 52tCALlgIKu9whOIiUojwj:1ds4fFW2B3PePZB1UyqF0d',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw Error('Network response was not ok');
      }
      return res.json();
    })
    .catch(err => {
      console.log('Error', err);
      throw err;
    });
};

export {get};
