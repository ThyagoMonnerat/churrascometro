let valueInputPeople = document.getElementById('peopleInput')
let valueInputDuration = document.getElementById('durationInput')
let html = document.getElementById('html')

let open = document.getElementById('open')
let modalContainer = document.getElementById('modalContainer')
let modalText = document.getElementById('modalId')
let close = document.getElementById('close')
let footer = document.getElementById('footer')

function inputLimitPeople() {
  if (valueInputPeople.value > 999) {
    valueInputPeople.value = 999
  } else if (valueInputPeople.value <= 0) {
    valueInputPeople.value = ''
  }
}

function inputLimitDuration() {
  if (valueInputDuration.value > 999) {
    valueInputDuration.value = 999
  } else if (valueInputDuration.value <= 0) {
    valueInputDuration.value = ''
  }
}

let meat = document.getElementById('redMeat')
let chicken = document.getElementById('chicken')
let sausage = document.getElementById('sausage')
let rice = document.getElementById('rice')
let crumbs = document.getElementById('crumbs')
let sauce = document.getElementById('sauce')
let bread = document.getElementById('bread')
let soda = document.getElementById('soda')
let beer = document.getElementById('beer')
let juice = document.getElementById('juice')

let checkboxes, index
checkboxes = document.getElementsByClassName('checkboxBtn')

open.addEventListener('click', calculateAll)
open.addEventListener('click', () => {
  modalContainer.classList.add('show')
  footer.classList.add('showed')
})

function calculateAll() {
  meat.value = 400
  chicken.value = 400
  sausage.value = 400
  rice.value = 100
  crumbs.value = 60
  sauce.value = 60
  bread.value = 300
  soda.value = 1000
  beer.value = 1500
  juice.value = 300

  if (valueInputDuration.value > 4) {
    Number((meat.value = 400 / 2))
    Number((chicken.value = 400 / 2))
    Number((sausage.value = 400 / 2))
    Number((rice.value = 100 / 2))
    Number((crumbs.value = 60 / 2))
    Number((sauce.value = 60 / 2))
    Number((bread.value = 300))
    Number((soda.value = 1000 / 2))
    Number((beer.value = 1500 / 2))
    Number((juice.value = 300 / 2))
  }

  meat.name = ' Kg de carne'
  chicken.name = ' Kg de frango'
  sausage.name = ' Kg de linguiça'
  rice.name = ' Kg de arroz'
  crumbs.name = ' Kg de farofa'
  sauce.name = ' Kg molho à campanha'
  bread.name = ' pães'
  soda.name = ' L de refrigerante'
  beer.name = ' L de cerveja'
  juice.name = ' L suco'

  for (index of checkboxes) {
    if (index.checked) {
      let result =
        Number((index.value * valueInputPeople.value) / 100) + index.name
      modalText.innerHTML += `<p>${result}</p>`
    }
  }

  close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
    footer.classList.remove('showed')
    html.classList.remove('overflow')
    modalText.innerHTML = ''
  })
}

let toUp = document.getElementById('upBtn')
let pUp = document.getElementById('pUpBtn')

window.addEventListener('scroll', scrollUpBtn)

function scrollUpBtn() {
  if (window.scrollY <= 200) {
    toUp.style.bottom = '-500px'
  } else {
    toUp.style.bottom = '0px'
  }
}
