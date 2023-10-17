const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = () => ({
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            react: path.resolve("./node_modules/react"),
            reactDOM: path.resolve("./node_modules/react-dom"),
        },
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "public" }],
          }),
    ],
})