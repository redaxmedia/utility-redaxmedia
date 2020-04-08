const path = require('path');

/**
 * load
 *
 * @since 1.0.0
 *
 * @param {string} relativePath
 *
 * @return {object}
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
