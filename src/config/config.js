const dev = {
    api: {
      URL: 'http://transfuzol-api.herokuapp.com/',
      // URL: 'https://c477a5d52604.ngrok.io/',
    },
  };
  
  const prod = {
    api: {
      URL: 'http://transfuzol-api.herokuapp.com/',
    },
  };
  
  const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
  
  export default {
    ...config,
  };
  