const dev = {
    api: {
      URL: 'http://transfuzol-env.eba-dvhmmhtu.us-west-2.elasticbeanstalk.com/',
      // URL: 'http://127.0.0.1:5000/',
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
  