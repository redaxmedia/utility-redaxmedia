const helper = require('./helper');

let optionArray = {};

/**
 * get
 *
 * @since 1.0.0
 *
 * @param name string
 *
 * @return string
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
 * @param name string
 * @param value string
 */

function set(name, value)
{
	optionArray[name] = value;
}

/**
 * clear
 *
 * @since 1.0.0
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
 * @param initArray array
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
 * @param relativePath string
 *
 * @return object
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
