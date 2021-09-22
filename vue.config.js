module.export = {
    chainWebpack: (config) => {
        config.plugins.delete("perfetch")
    },
}
