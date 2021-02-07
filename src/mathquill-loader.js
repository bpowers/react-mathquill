// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
const MathQuill = require('@system-dynamics/mathquill/build/mathquill.commonjs.js')
const MQ = MathQuill.getInterface(2)

export default MQ
