const dev = {
    api: {
      URL: 'https://ab211eefcd45.ngrok.io/',
      // URL: 'http://localhost:5001/',
    },
  };
  
  const prod = {
    api: {
      URL: 'https://ab211eefcd45.ngrok.io/',
    },
  };
  
  const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
  
  export default {
    ...config,
  };
  