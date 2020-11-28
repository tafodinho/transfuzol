const dev = {
    api: {
      URL: 'https://api.transfuzol.com/',
      // URL: 'http://127.0.0.1:5000/',
    },
  };
  
  const prod = {
    api: {
      URL: 'https://api.transfuzol.com/',
    },
  };
  
  const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
  
  export default {
    ...config,
  };
  