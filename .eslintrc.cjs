var { eslintConfig } = require('@mjljm/configs/eslint-config');
/**
 * @type {typeof eslintConfig}
 */
const eslintConfigWithNode = { ...eslintConfig, env: { ...eslintConfig.env, node: true } };

module.exports = eslintConfigWithNode;
