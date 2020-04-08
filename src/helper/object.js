/**
 * clone
 *
 * @since 1.0.0
 *
 * @param {object} object
 *
 * @return {object}
 */

function clone(object)
{
	return Object.assign({}, object);
}

/**
 * tidy
 *
 * @since 1.0.0
 *
 * @param {object} object
 *
 * @return {object}
 */

function tidy(object)
{
	return JSON.parse(JSON.stringify(object));
}

module.exports =
{
	clone,
	tidy
};
