const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  target: "webworker",
  devtool: isProduction ? false : "cheap-module-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
