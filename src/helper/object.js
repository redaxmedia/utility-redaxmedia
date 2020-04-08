/**
 * clone
 *
 * @since 1.0.0
 *
 * @param {object} originalObject
 *
 * @return {object}
 */

function clone(originalObject)
{
	return Object.assign({}, originalObject);
}

/**
 * tidy
 *
 * @since 1.0.0
 *
 * @param {object} dirtyObject
 *
 * @return {object}
 */

function tidy(dirtyObject)
{
	return JSON.parse(JSON.stringify(dirtyObject));
}

module.exports =
{
	clone,
	tidy
};
