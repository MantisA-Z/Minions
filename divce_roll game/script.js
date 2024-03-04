function roll_dice(){
const usr_input = document.getElementById('in').value;
const result = document.getElementById('result');
const images = document.getElementById('images');
let values = [];
let imgs = [];


for (let i = 0; i < usr_input; i++){
    let value = Math.floor(Math.random() * 6);
    values.push(value);
    imgs.push(`<img src="png/${value}.png">`);
 };
 
 result.textContent = `Dice: ${values.join(', ')}`;
 images.innerHTML = imgs.join('');
 localStorage.setItem('save_img', images);
 localStorage.setItem('save_result', result);

}
