// for axios
const axios = require('axios').default;

export const baseURL = 'https://api.github.com/';

export const instanceApiService = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

//Inject Token cho các API cần.

instanceApiService.interceptors.request.use(function (config) {
  config.headers['Accept'] = 'application/vnd.github.v3+json';
  return config;
});

//Print Log Request
instanceApiService.interceptors.request.use(
  function (config) {
    console.log(`=================================`);
    console.log(`Call API Request: ${config.url}`, config);
    console.log(`================================= `);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//Print Log Response
// instanceApiService.interceptors.response.use(
//   function (response) {
//     // console.log(`=================================`);
//     // console.log(`Call API Response: ${response.config.url}`, response);
//     // console.log(`================================= `);
//     return response;
//   },
//   function (error) {
//     // console.log('error catch', error.response);
//     if (error.response && error.response) {
//       // In case token EXPIRED
//       if (error.response.data.message == 'EXPIRED_TOKEN') {
//         // TODO:
//         // setTimeout(() => {
//         //   Alert.alert(null, 'Please login to continue', [
//         //     { text: 'OK', onPress: () => store.dispatch(setToken('')) },
//         //   ]);
//         // }, 300);
//         store.dispatch(setToken(null));
//         return;
//       }
//       return error.response;
//     }
//     return Promise.reject(error.message);
//   },
// );
