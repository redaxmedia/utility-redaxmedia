/**
 * tidy
 *
 * @since 1.0.0
 *
 * @param dirtyObject object
 *
 * @return string
 */

function tidy(dirtyObject)
{
	return JSON.parse(JSON.stringify(dirtyObject));
}

module.exports =
{
	tidy
};
