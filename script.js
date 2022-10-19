document.addEventListener("DOMContentLoaded", function () {

	const length_of_desc = 8;
	let checker = 0;
	
	

	for (let i=0; i<length_of_desc; i++){
		let div = document.createElement('div');
		if (checker % 2 == 0){
			div.className = 'wrapper_lay';
		}
		else {
			div.className = 'wrapper_lay1';
		}
		elem.append(div);
		for (let j=0; j<length_of_desc; j++){
			let cell = document.createElement('div');
			cell.className = 'cell';
			div.append(cell);
		}
		checker++;
	}

	let array_of_knigts_coordinates = [];
	let count = 0;
	var array_of_descs_cells = [];
	for (let i = 0; i < length_of_desc; i++) {
		array_of_descs_cells[i] = [];
	}
	let array = document.querySelectorAll('.wrapper > div > .cell');
	for (let i = 0; i < length_of_desc; i++) {
		for (let j = 0; j < length_of_desc; j++) {
			array_of_descs_cells[i][j] = array[count];
			// console.log(array_of_descs_cells[i][j]);
			count++;
		}
	}
	//let g = 0; ------
	let wrapper = document.getElementById('elem');
	wrapper.onclick = function (event) {
		let target = event.target; // где был клик?
		if (target.tagName != 'DIV') return; // не на DIV? тогда не интересует
		target.classList.toggle('image_knight');
	};



	function Chess_test(array_of_descs_cells) {
		let count = 0;
		let ar = array_of_knigts_coordinates;
		for (let i = 0; i < length_of_desc; i++) {
			for (let j = 0; j < length_of_desc; j++) {
				if (array_of_descs_cells[i][j].classList.contains('image_knight')) {
					ar.push({ x: i, y: j });
				}
			}
		}


		for (let i = 0; i < ar.length; i++) {
			for (let j = 0; j < ar.length; j++) {
				console.log(ar[i].x + ' | ' + ar[i].y);
				if (((ar[i].x - 2) == ar[j].x) && ((ar[i].y - 1) == ar[j].y)) { // 1 ok

					count++;
					break;
				}
				if (((ar[i].x - 1) == ar[j].x) && ((ar[i].y - 2) == ar[j].y)) { // 2 ok

					count++;
					break;
				}
				if (((ar[i].x + 1) == ar[j].x) && ((ar[i].y - 2) == ar[j].y)) { // 3 ok 

					count++;
					break;
				}
				if (((ar[i].x + 2) == ar[j].x) && ((ar[i].y - 1) == ar[j].y)) { // 4 ok

					count++;
					break;
				}
				if (((ar[i].x + 2) == ar[j].x) && ((ar[i].y + 1) == ar[j].y)) { // 5 ok

					count++;
					break;
				}
				if (((ar[i].x + 1) == ar[j].x) && ((ar[i].y + 2) == ar[j].y)) { // 6 ok

					count++;
					break;
				}
				if (((ar[i].x - 1) == ar[j].x) && ((ar[i].y + 2) == ar[j].y)) { // 7 ok

					count++;
					break;
				}
				if (((ar[i].x - 2) == ar[j].x) && ((ar[i].y + 1) == ar[j].y)) { // 8

					count++;
					break;
				}
			}
		}
		if (ar.length == 0){
			alert('Поставьте коней, пожалуйста!');
			return;
		}

		if (count) alert('Кони могут срубить друг друга!');
		else alert('Кони НЕ могут срубить друг друга!');

		//message.style.display = "block";
		//message.classList.toggle('changer');

		array_of_knigts_coordinates = [];
	}

	document.querySelector("input").addEventListener('click', function () {
		Chess_test(array_of_descs_cells);
	})

})
document.write(str);
