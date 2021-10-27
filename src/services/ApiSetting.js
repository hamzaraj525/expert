// const BaseURL = 'http://spaceshiptech.com/expert/api/';

const BaseURL = 'https://expertnearu.com/api/';

let headers = {};

//FUNCTION TO LOAD TOKEN AND USER ID

const setConfig = () => {
  headers = {
    'Content-Type': 'form-data',
  };
};

export {BaseURL, headers, setConfig};
