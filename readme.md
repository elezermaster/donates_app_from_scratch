---


---

<h1 id="js-app-written-from-scratch">JS app written from scratch</h1>
<p>Using webpack</p>
<p>npm install webpack webpack-cli html-webpack-plugin  --save-dev<br>
//////////////////////////////////////////<br>
npm install webpack webpack-cli --save-dev<br>
// webpack.config.js<br>
const path = require(‘path’);</p>
<p>module.exports = {<br>
entry: ‘./src/index.js’,<br>
output: {<br>
filename: ‘main.js’,<br>
path: path.resolve(__dirname, ‘dist’),<br>
},<br>
};<br>
///////////////////////////////////////////<br>
npm i --save-dev html-webpack-plugin clean-webpack-plugin babel-loader @babel/core @babel/preset-env webpack style-loader css-loader file-loader webpack-dev-server</p>
<p>const path = require(‘path’);<br>
const HtmlWebpackPlugin = require(‘html-webpack-plugin’)</p>
<p>module.exports = {<br>
mode:‘development’,<br>
entry: ‘./src/index.js’,<br>
output: {<br>
filename: ‘build.js’,<br>
path: path.resolve(__dirname, ‘build’),<br>
},<br>
plugins: [<br>
new HtmlWebpackPlugin()<br>
]<br>
};<br>
/////////////////////////////////////////////<br>
npm install --save-dev clean-webpack-plugin<br>
Set-ExecutionPolicy RemoteSigned<br>
//const { CleanWebpackPlugin } = require(‘clean-webpack-plugin’);<br>
//////////////////////////////////////////////<br>
npm install -D babel-loader @babel/core @babel/preset-env webpack</p>
<p>npm install --save-dev style-loader<br>
npm install --save-dev css-loader<br>
npm install file-loader --save-dev</p>
<p>//allow using VScode command prompt<br>
Set-ExecutionPolicy RemoteSigned</p>
<p>npm install webpack-dev-server --save-dev<br>
devServer: {<br>
contentBase: ‘./build’,<br>
port: 8080,<br>
open: true,<br>
},<br>
//////////////////////////////////////////////</p>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

