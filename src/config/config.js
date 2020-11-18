const dev = {
    api: {
      // URL: 'https://26b60ebe6164.ngrok.io/',
      URL: 'http://localhost:5001/',
    },
  };
  
  const prod = {
    api: {
      URL: 'https://26b60ebe6164.ngrok.io/',
    },
  };
  
  const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;
  
  export default {
    ...config,
  };
  