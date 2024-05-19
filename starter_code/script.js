const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
//makes lowercase str and checks if entered fruit matches any on list
function search(str) {
	let results = [];
	if (str.length>0){
		results = fruit.filter(item => {
			return item.toLowerCase().includes(str.toLowerCase())
		})
	}
	return results;
}

function searchHandler(e) {
	let fruitVal = e.target.value;
	let results = search(inputVal);
	showSuggestions(results, inputVal);
	// TODO
}

function showSuggestions(results) {
	suggestions.innerHTML="";
	results.forEach(val) => {
		let li = document.createElement('li');
		li.textcontent = val;
		suggestions.appendChild(li)
	}

	// show matching fruit in a dropdown
}

function useSuggestion(e) {
	// TODO
	if(e.target.matches('li')){
		let inputVal = e.target.textContent;
		input.value = inputVal;
		suggestions.innerHTML = "";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);