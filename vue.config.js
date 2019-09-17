module.exports = {
  // baseUrl: '/dist',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // изменение конфигурации для production...
    } else {
      // изменения для разработки...
    }
  },
  chainWebpack: config => {
    // удаляем prefetch плагин:
    // config.plugins.delete('prefetch')

    // ИЛИ
    // изменяем его настройки:
    config.plugin('prefetch').tap(options => {
      // console.log(options);
      // options[0].fileBlacklist = options[0].fileBlacklist || []
      // options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      // return options
    }),
    config.plugin('preload').tap(options => {
      // console.log(options);
      options[0].include = 'all';
      // options[0].fileBlacklist = options[0].fileBlacklist || []
      // options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  }
};