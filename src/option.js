const helper = require('./helper');

let optionArray = {};

/**
 * get
 *
 * @since 1.0.0
 *
 * @param {string} name
 *
 * @return {string}
 */

function get(name)
{
	return optionArray[name];
}

/**
 * set
 *
 * @since 1.0.0
 *
 * @param {string} name
 * @param {string} value
 *
 * @return {void}
 */

function set(name, value)
{
	optionArray[name] = value;
}

/**
 * clear
 *
 * @since 1.0.0
 *
 * @return {void}
 */

function clear()
{
	optionArray = {};
}

/**
 * init
 *
 * @since 1.0.0
 *
 * @param {Array} initArray
 *
 * @return {void}
 */

function init(initArray)
{
	optionArray =
	{
		...optionArray,
		...helper.object.tidy(initArray)
	};
}

/**
 * construct
 *
 * @since 1.0.0
 *
 * @param {string} relativePath
 *
 * @return {object}
 */

function construct(relativePath)
{
	const exports =
	{
		get,
		set,
		clear,
		init
	};

	optionArray = helper.module.load(relativePath);
	return exports;
}

module.exports = construct;
