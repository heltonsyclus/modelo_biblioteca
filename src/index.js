module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')
  if (api.hasVite === true) {
    api.compatibleWith('@quasar/app-vite', '^1.0.0-beta.0')
  }
  else { // api.hasWebpack === true
    api.compatibleWith('@quasar/app-webpack', '^3.0.0')
  }
  api.extendQuasarConf(extendConf)
}

function extendConf (conf) {  
  conf.boot.push('~quasar-app-extension-qs-card/src/boot/register-qs-card.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-qs-card[\\/]src/)
  conf.framework.plugins.push('AppVisibility')
}
