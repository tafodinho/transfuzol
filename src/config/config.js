const dev = {
    api: {
      // URL: 'https://api.transfuzol.com/',
      URL: 'https://6ce4eec19156.ngrok.io/',
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
  