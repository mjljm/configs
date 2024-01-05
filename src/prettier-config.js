// This file was named prettier-config instead of .prettierrc so as not to get removed by package-manager
/**
 * @type {import('prettier').Config}
 */
export default {
	useTabs: true,
	overrides: [
		{
			files: ['*.js', '*.cjs', '*.mjs', '*.ts'],
			options: {
				semi: true,
				singleQuote: true,
				trailingComma: 'none',
				printWidth: 115
			}
		}
	]
};
