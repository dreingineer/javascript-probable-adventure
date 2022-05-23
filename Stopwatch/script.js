let query_selector_class = document.querySelector('.class')
let button_class = document.querySelector('.button_class')

button_class.addEventListener('click', () => {
  query_selector_class.textContent = "This WORKS!"
})

let query_selector_id = document.querySelector('#id_query')
let button_id_query = document.querySelector('.button_id_query')

button_id_query.addEventListener('click', () => {
  query_selector_id.textContent = "This button 1 WORKS!"
})

let query_element_id = document.getElementById('id')
let button_element_id = document.querySelector('.button_id')

button_element_id.addEventListener('click', () => {
  query_element_id.textContent = "This button 2 WORKS!"
})