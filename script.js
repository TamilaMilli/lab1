const input = document.getElementById('input');
const button = document.getElementById('button');
const info = document.getElementById('info');


input.value = "kyiv";

async function onButtonClick() {
	
	const link = `https://nominatim.openstreetmap.org/search.php?format=jsonv2&city=${input.value}`;

	let response = await fetch(link);
	let data = await response.json();
	data = data[0];


	let cityName = document.createElement('h2');
	let icon = new Image;
	let coordinates = document.createElement('div');
	let placeId = document.createElement('div');
	let placeRank = document.createElement('div');
	let category = document.createElement('div');
	let type = document.createElement('div');
	let licence = document.createElement('div');

	icon.src = data.icon;
	cityName.textContent = `${data.display_name}`;
	coordinates.textContent = `Latitude: ${data.lat}, longitude: ${data.lon}`;
	placeId.textContent = `Place id: ${data.place_id}`;
	placeRank.textContent = `Place rank: ${data.place_rank}`;
	category.textContent = `Category: ${data.category}`;
	type.textContent = `Type: ${data.type}`;
	licence.textContent = `Licence: ${data.licence}`;

	info.append(cityName, icon, coordinates, placeRank, placeId, category, type, licence);
}

button.addEventListener('click', onButtonClick);