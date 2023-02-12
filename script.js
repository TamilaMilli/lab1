//1  Звертаємось до HTML елементів
const input = document.getElementById('input');
const button = document.getElementById('button');
const info = document.getElementById('info');

// 2 Задаємо дефолтне значення інпуту
let inputValue = null;

input.value = "kyiv";

async function onButtonClick() {
	inputValue = input.value;
	
	// 3 Задаємо параметр запиту, тобто місто, яке ввів користувач
	const link = `https://nominatim.openstreetmap.org/search.php?format=jsonv2&city=${inputValue}`;
	
	// 4 Створюємо елементи в які потім запишемо дані
	let cityName = document.createElement('h2');
	let icon = new Image;
	let coordinates = document.createElement('div');
	let placeId = document.createElement('div');
	let placeRank = document.createElement('div');
	let category = document.createElement('div');
	let type = document.createElement('div');
	let licence = document.createElement('div');
	
	// 5 Надсилаємо запит
	let response = await fetch(link);

	// .json() указывает объекту класса response формат, в котором мы хотим получить данные.
	let data = await response.json();
	data = data[0];

	// 6 Записуємо дані в попередньо створені елементи
	icon.src = data.icon;
	cityName.textContent = `${data.display_name}`;
	coordinates.textContent = `Latitude: ${data.lat}, longitude: ${data.lon}`;
	placeId.textContent = `Place id: ${data.place_id}`;
	placeRank.textContent = `Place rank: ${data.place_rank}`;
	category.textContent = `Category: ${data.category}`;
	type.textContent = `Type: ${data.type}`;
	licence.textContent = `Licence: ${data.licence}`;

	// Додаємо всі елементи до блоку info
	info.append(cityName, icon, coordinates, placeRank, placeId, category, type, licence);
}

// Вішаєм слухача подій на кнопку
button.addEventListener('click', onButtonClick);