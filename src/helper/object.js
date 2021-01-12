/**
 * is object
 *
 * @since 1.2.0
 *
 * @param {object} object
 *
 * @return {boolean}
 */

function isObject(object)
{
	return typeof object === 'function' || typeof object === 'object' && !!object;
}

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
 * merge deep
 *
 * @since 1.2.0
 *
 * @param {object} targetObject
 * @param {object} sourceObject
 *
 * @return {object}
 */

function mergeDeep(targetObject, sourceObject)
{
	const resultObject = Object.assign({}, targetObject);

	if (isObject(targetObject) && isObject(sourceObject))
	{
		Object.keys(sourceObject).forEach(key =>
		{
			if (isObject(sourceObject[key]))
			{
				if (key in targetObject)
				{
					resultObject[key] = mergeDeep(targetObject[key], sourceObject[key]);
				}
				else
				{
					Object.assign(resultObject,
					{
						[key]: sourceObject[key]
					});
				}
			}
			else
			{
				Object.assign(resultObject,
				{
					[key]: sourceObject[key]
				});
			}
		});
	}
	return resultObject;
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
	isObject,
	clone,
	mergeDeep,
	tidy
};
