const helper = require('./helper');

let optionObject= {};

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
	return optionObject[name];
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
	optionObject[name] = value;
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
	optionObject = {};
}

/**
 * init
 *
 * @since 1.0.0
 *
 * @param {object} initObject
 *
 * @return {void}
 */

function init(initObject)
{
	optionObject =
	{
		...optionObject,
		...helper.object.tidy(initObject)
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

	optionObject = helper.module.load(relativePath);
	return exports;
}

module.exports = construct;
