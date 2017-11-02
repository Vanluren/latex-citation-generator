const cmd = require('child_process');

module.exports = function(plop) {
	// create your generators here
	plop.setHelper('splitOnCaps', splitOnCaps);
	
	plop.setGenerator('common common', {
		description: 'this generates a new common common',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'the name of the common. (PascalCased)',
				validate: isPascalCased,
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/common/{{dashCase name}}/{{dashCase name}}.js',
				templateFile: 'plop-templates/common/common-component.hsb',
			},
		],
	});
	
	plop.setGenerator('view', {
		description: 'this generates a new view',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'the name of the View. (PascalCased)',
				validate: isPascalCased,
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/views/{{dashCase name}}/{{dashCase name}}-container.js',
				templateFile: 'plop-templates/view/view-container.hsb',
			},
		],
	});
};

/** Helper Functions */
const isPascalCased = input => {
	if (isUpperCase(input.charAt(0))) {
		console.log('foo');
		return true;
	}
	throw Error(`string ${input} must be PascalCased.`);
};

const isUpperCase = myString => {
	return myString === myString.toUpperCase();
};

const splitOnCaps = txt => {
	return txt.split(/(?=[A-Z])/).join(' ');
};
