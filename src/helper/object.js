/**
 * tidy
 *
 * @since 1.0.0
 *
 * @param dirty object
 *
 * @return object
 */

function tidy(dirty)
{
	return JSON.parse(JSON.stringify(dirty));
}

module.exports =
{
	tidy
};
