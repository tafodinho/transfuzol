const dev = {
    api: {
      // URL: 'https://api.transfuzol.com/',
      URL: 'https://9d29fd2af089.ngrok.io/',
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
  