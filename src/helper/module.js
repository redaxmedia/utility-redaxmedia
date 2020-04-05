const path = require('path');

/**
 * load
 *
 * @since 1.0.0
 *
 * @param relativePath string
 *
 * @return object
 */

function load(relativePath)
{
	const absolutePath = path.resolve(relativePath);

	return require(absolutePath);
}

module.exports =
{
	load
};
