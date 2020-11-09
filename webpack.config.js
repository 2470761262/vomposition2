const path = require("path");
const fs = require("fs")
process.env.NODE_ENV = 'production';//production

//自动增加package.join中的version
const package = JSON.parse(fs.readFileSync("package.json").toString());
const version = package.version;
package.version = Array.from(new String(parseInt(version.replace(/\./g, "")) + 1)).join(".");
fs.writeFileSync('package.json', JSON.stringify(package,null,4));

module.exports = {

    //devtool: "eval-source-map",

    entry: {
        main: path.join(__dirname, "./src/index.ts"),
    },

    mode: "production",

    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    // 输出
    output: {
        path: path.resolve(process.cwd(), "./dist"),
        publicPath: "",
        filename: "[name].js",
        libraryTarget: "umd"
    },
    // devServer: {

    //     publicPath: "/",

    //     hot: true,

    //     overlay: { errors: true },

    //     quiet: true,
    // },
};
