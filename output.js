{
  context: '/Users/ayoung/personal/experimenting/ur_one',
  devtool: 'cheap-module-eval-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/ayoung/personal/experimenting/ur_one/dist',
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    symlinks: true,
    alias: {
      '@': '/Users/ayoung/personal/experimenting/ur_one/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.ts',
      '.tsx'
    ],
    modules: [
      'node_modules',
      '/Users/ayoung/personal/experimenting/ur_one/node_modules',
      '/Users/ayoung/personal/experimenting/ur_one/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      '/Users/ayoung/personal/experimenting/ur_one/node_modules',
      '/Users/ayoung/personal/experimenting/ur_one/node_modules/@vue/cli-service/node_modules'
    ],
    symlinks: true
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              preserveWhitespace: false,
              template: {
                doctype: 'html'
              },
              loaders: {
                css: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      shadowMode: false,
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      minimize: false
                    }
                  }
                ],
                sass: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      shadowMode: false,
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      minimize: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      indentedSyntax: true,
                      sourceMap: false
                    }
                  }
                ],
                scss: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      shadowMode: false,
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      minimize: false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ],
                less: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      shadowMode: false,
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      minimize: false
                    }
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ],
                stylus: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      shadowMode: false,
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      minimize: false
                    }
                  },
                  {
                    loader: 'stylus-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ],
                styl: [
                  {
                    loader: 'vue-style-loader',
                    options: {
                      shadowMode: false,
                      sourceMap: false
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: false,
                      minimize: false
                    }
                  },
                  {
                    loader: 'stylus-loader',
                    options: {
                      sourceMap: false
                    }
                  }
                ],
                js: [
                  {
                    loader: 'cache-loader',
                    options: {
                      cacheDirectory: '/Users/ayoung/personal/experimenting/ur_one/node_modules/.cache/cache-loader'
                    }
                  },
                  {
                    loader: 'babel-loader'
                  }
                ],
                ts: [
                  {
                    loader: 'cache-loader',
                    options: {
                      cacheDirectory: '/Users/ayoung/personal/experimenting/ur_one/node_modules/.cache/cache-loader'
                    }
                  },
                  {
                    loader: 'babel-loader'
                  },
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true,
                      appendTsSuffixTo: [
                        /\.vue$/
                      ],
                      happyPackMode: false
                    }
                  }
                ]
              },
              cssSourceMap: false,
              cssModules: {
                localIdentName: '[name]_[local]__[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'media/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.stylus$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.module\.stylus$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.module\.styl$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.module\.sass$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.module\.less$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              shadowMode: false,
              sourceMap: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              minimize: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        include: [
          '/Users/ayoung/personal/experimenting/ur_one/src',
          '/Users/ayoung/personal/experimenting/ur_one/test'
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/ayoung/personal/experimenting/ur_one/node_modules/.cache/cache-loader'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        include: [
          '/Users/ayoung/personal/experimenting/ur_one/src',
          '/Users/ayoung/personal/experimenting/ur_one/test'
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/ayoung/personal/experimenting/ur_one/node_modules/.cache/cache-loader'
            }
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                /\.vue$/
              ],
              happyPackMode: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* DefinePlugin */ {
      definitions: {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    },
    /* TimeFixPlugin */ {
      timefix: 11000
    },
    /* CaseSensitivePathsPlugin */ {
      options: {},
      pathCache: {},
      fsOperations: 0,
      primed: false
    },
    /* FriendlyErrorsWebpackPlugin */ {
      compilationSuccessInfo: {},
      onErrors: undefined,
      shouldClearConsole: true,
      formatters: [
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ }
      ],
      transformers: [
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ }
      ]
    },
    /* HotModuleReplacementPlugin */ {
      options: {},
      multiStep: undefined,
      fullBuildTimeout: 200,
      requestTimeout: 10000
    },
    /* NamedModulesPlugin */ {
      options: {}
    },
    /* NoEmitOnErrorsPlugin */ {},
    /* WatchMissingNodeModulesPlugin */ {
      nodeModulesPath: '/Users/ayoung/personal/experimenting/ur_one/node_modules'
    },
    /* PreloadPlugin */ {
      options: {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    },
    /* PreloadPlugin */ {
      options: {
        rel: 'prefetch',
        include: 'asyncChunks',
        fileBlacklist: [
          /\.map$/
        ]
      }
    },
    /* HtmlWebpackPlugin */ {
      options: {
        template: '/Users/ayoung/personal/experimenting/ur_one/public/index.html',
        templateParameters: function () { /* omitted long function */ },
        filename: 'index.html',
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        minify: false,
        cache: true,
        showErrors: true,
        chunks: 'all',
        excludeChunks: [],
        chunksSortMode: 'auto',
        meta: {},
        title: 'Webpack App',
        xhtml: false,
        env: {
          NODE_ENV: 'development',
          BASE_URL: '/'
        }
      }
    },
    /* HtmlPwaPlugin */ {
      options: {
        name: 'vue_cli_ts_styleguidist',
        themeColor: '#4DBA87',
        msTileColor: '#000000'
      }
    },
    /* ForkTsCheckerWebpackPlugin */ {
      options: {
        vue: true,
        tslint: true,
        formatter: 'codeframe',
        checkSyntacticErrors: false
      },
      tsconfig: './tsconfig.json',
      tslint: './tslint.json',
      watch: [],
      ignoreDiagnostics: [],
      ignoreLints: [],
      logger: {
        log: function () { [native code] },
        debug: function () { [native code] },
        info: function () { [native code] },
        warn: function () { [native code] },
        error: function () { [native code] },
        dir: function () { [native code] },
        time: function () { [native code] },
        timeEnd: function () { [native code] },
        trace: function () { [native code] },
        assert: function () { [native code] },
        clear: function () { [native code] },
        count: function () { [native code] },
        countReset: function () { [native code] },
        group: function () { [native code] },
        groupCollapsed: function () { [native code] },
        groupEnd: function () { [native code] },
        Console: function () { /* omitted long function */ },
        dirxml: function dirxml() { [native code] },
        table: function table() { [native code] },
        markTimeline: function markTimeline() { [native code] },
        profile: function profile() { [native code] },
        profileEnd: function profileEnd() { [native code] },
        timeline: function timeline() { [native code] },
        timelineEnd: function timelineEnd() { [native code] },
        timeStamp: function timeStamp() { [native code] },
        context: function context() { [native code] }
      },
      silent: false,
      async: true,
      checkSyntacticErrors: false,
      workersNumber: 1,
      memoryLimit: 2048,
      useColors: true,
      colors: {
        enabled: true
      },
      formatter: function () { /* omitted long function */ },
      tsconfigPath: undefined,
      tslintPath: undefined,
      watchPaths: [],
      compiler: undefined,
      started: undefined,
      elapsed: undefined,
      cancellationToken: undefined,
      isWatching: false,
      checkDone: false,
      compilationDone: false,
      diagnostics: [],
      lints: [],
      emitCallback: function noopEmitCallback() { },
      doneCallback: function () { /* omitted long function */ },
      typescriptVersion: '2.8.3',
      tslintVersion: '5.9.1',
      vue: true
    }
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
