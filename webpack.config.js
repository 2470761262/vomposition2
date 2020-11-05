const path = require("path");
process.env.NODE_ENV = 'production';//production
module.exports = {
    
  //  devtool: "eval-source-map",

    entry: {
        main: path.join(__dirname, "./src/index.ts"),
    },

    mode: "production",

    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader"}
        ]
    },
    // 输出
    output: {
        path: path.resolve(process.cwd(), "./dist"),
        publicPath: "",
        filename: "[name].js",
        libraryTarget:"umd"
    },
    // devServer: {

    //     publicPath: "/",

    //     hot: true,

    //     overlay: { errors: true },

    //     quiet: true,
    // },
};
