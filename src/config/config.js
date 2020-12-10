const dev = {
    api: {
      URL: 'https://api.transfuzol.com/',
      // URL: 'https://9b434fa2a824.ngrok.io/',
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
  