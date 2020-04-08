const os = require('os');

/**
 * parse
 *
 * @since 1.0.0
 *
 * @param {string} content
 *
 * @return {object}
 */

function parse(content)
{
	try
	{
		return JSON.parse(content);
	}
	catch (exception)
	{
		return {};
	}
}

/**
 * stringify
 *
 * @since 1.0.0
 *
 * @param {object} object
 * @param {number|string} indent
 * @param {string} newline
 *
 * @return {string}
 */

function stringify(object, indent = 2, newline)
{
	const json = JSON.stringify(object, null, indent) + os.EOL;
	const pattern = new RegExp(os.EOL, 'g');

	return newline ? json.replace(pattern, newline) : json;
}

module.exports =
{
	parse,
	stringify
};
