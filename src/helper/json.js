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
	catch (error)
	{
		return {};
	}
}

module.exports =
{
	parse
};
