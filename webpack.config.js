const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada de tu aplicacion
    output:{
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta salida
    }
    module{ 
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos
                use: ['stile-loader', 'css-loader'], // para que aparezca cargando cuando procesa
            },
            {
               test: /\.js$/, //identificar archivos js
               exclude: /node_modules/, //excluir carpeta node_modules
               use{
                loader: 'babel-loader', //loader para transpilar js moderno 
                options: {
                    presets: ['@babel/preset-env'],

                }
               }
            }
        ]
    }
    devtool: 'source-map', //generar source maps para pacilitar la depuracion
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), //carpeta donde obtenemos los archivos que mostramos al usuario
    }
}
