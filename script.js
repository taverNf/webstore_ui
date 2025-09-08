const searchInput = document.getElementById('searchInput')
const searchIcon = document.getElementById('searchIcon')

searchIcon.addEventListener('click', () => {
  if (searchInput.classList.contains('active') && searchInput.value !== ''){
    alert("Nenhum produto encontrado.")
  } else {
    searchInput.classList.toggle('active')
    searchIcon.classList.toggle('active')
  }
})