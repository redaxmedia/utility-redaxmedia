const os = require('os');

/**
 * parse
 *
 * @since 1.0.0
 *
 * @param content string
 *
 * @return object
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
 * @param data string
 * @param indent string
 * @param newline string
 *
 * @return string
 */

function stringify(data, indent = 2, newline)
{
	const json = JSON.stringify(data, null, indent) + os.EOL;
	const pattern = new RegExp(os.EOL, 'g');

	return newline ? json.replace(pattern, newline) : json;
}

module.exports =
{
	parse,
	stringify
};
