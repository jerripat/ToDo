
const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemList');
const filters = document.querySelectorAll('.nav-item');

// create empty item list
let todoItems = [];

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const itemName = (itemInput.value.trim());
        if(itemName === 0){
            alert('Please enter an item');

        }

    })
})
