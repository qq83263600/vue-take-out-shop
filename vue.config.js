// module.exports = {
//   devServer: {
//     proxy: {
//       // 配置多个跨域
//       '/api': {
//         target: 'http://192.168.0.105:4000/',//跨域接口的地址
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     },
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     }
//   }
// };