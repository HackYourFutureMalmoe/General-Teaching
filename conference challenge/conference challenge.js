// you're involved in organzing a conference and here are information you about all participants

const participants = [
	{name: 'Igor Petterson',
	profession: 'Designer',
	company: 'Awesome Stuff AB', 
	foodPreference: 'vegetarian', 
	registerToTalks:  ['talk1', 'talk4', 'talk5']
	},
	{name: 'Richard Lane',
	profession: 'Developer',
	company: 'Super Stuff AB', 
	foodPreference: 'meat', 
	registerToTalks:  ['talk3', 'talk4', 'talk2']
	},
	{name: 'Andrea Mason',
	profession: 'Designer',
	company: 'Super Stuff AB', 
	foodPreference: 'meat', 
	registerToTalks:  ['talk3', 'talk4', 'talk6']
	},
	{name: 'Alexander Hunter',
	profession: 'Developer',
	company: 'Amazing Stuff AB', 
	foodPreference: 'vegetarian', 
	registerToTalks:  ['talk1', 'talk3', 'talk5']
	},
	{name: 'Sofie Dixon',
	profession: 'Developer',
	company: 'Amazing Stuff AB', 
	foodPreference: 'vegetarian', 
	registerToTalks:  ['talk2', 'talk4', 'talk5']
	},
	{name: 'Paul Shaw',
	profession: 'Architect',
	company: 'Awesome Stuff AB', 
	foodPreference: 'vegan', 
	registerToTalks:  ['talk2', 'talk5', 'talk3']
	}
]

/**
* make sure, every participant has a (HTML) name tag like this:
* 	----------------------------------------
*	|										|
*	|			NAME						|
*	|			PROFESSION					|
*	|			COMPANY						|
*	|										|
*	----------------------------------------
**/


// create html, that shows an overview over food preferences:


/**
* list registered names for each talk like this:
* talk1:
* - name1
* - name2
*...
**/