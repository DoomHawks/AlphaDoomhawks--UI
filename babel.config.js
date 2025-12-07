module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
       [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true,
        },
      ],
       // ⛔ Nothing should come after this plugin
      "react-native-reanimated/plugin",  // MUST BE LAST      
    ],
  };
};


// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//     ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//    "nativewind/babel",
//     ],
//     plugins: [   
//       [
//         "module:react-native-dotenv",
//         {
//           envName: 'APP_ENV',
//         moduleName: '@env',
//         path: '.env',
//         blocklist: null,
//         allowlist: null,

//         safe: false,
//         allowUndefined: true,
//         verbose: false,
//        },
//       ],
//       // Reanimated MUST be last
//       "react-native-reanimated/plugin",
//     ],
//   };
// };
