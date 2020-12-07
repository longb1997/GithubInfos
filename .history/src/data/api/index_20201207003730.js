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

//Validate trong case hết hạn
// instanceApiService.interceptors.response.use(function (response) {
//   console.log('instanceApiService.interceptors.response', response);
//   //Check response.data
//   if (response.data.code === 'EXPIRE') {
//     // TODO:
//     setTimeout(() => {
//       // Alert.alert(null, 'Bạn cần đăng nhập để thực hiện', [
//       //   { text: 'OK', onPress: () => store.dispatch(callActionSignOut()) },
//       // ]);
//     }, 300);
//     return;
//   }
//   return response;
// });

// //Validate trong case hết hạn
// instanceApiService.interceptors.response.use(function(response) {
//   console.log('instanceApiService.interceptors.response', response);
//   //Check response.data
//   if (response.data.code === 'EXPIRE') {
//     // TODO:
//     setTimeout(() => {
//       Alert.alert(null, 'Bạn cần đăng nhập để thực hiện', [
//         { text: 'OK', onPress: () => store.dispatch(callActionSignOut()) },
//       ]);
//     }, 300);
//     return;
//   }
//   return response;
// });

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

// export const returnFormData = (body) => {
//   const formdata = new FormData();
//   const arrayBody = Object.keys(body);
//   arrayBody.map((item) => {
//     formdata.append(item, body[item]);
//   });
//   return formdata;
// };
