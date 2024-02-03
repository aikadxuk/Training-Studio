// variável do hamburguer
const hamburguer = document.querySelector('#hamburguer')

// variáveis da seção de treino

const buttons = document.querySelectorAll('.training-button')
const boxesTraining = document.querySelectorAll('.training-section')

// Variáveis da seção de Horários
const scheduleButtons = document.querySelectorAll('.scheduleButton')
const scheduleHours = document.querySelectorAll('.hour-schedule')

// Variáveis formulário

const nome = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const textarea = document.getElementById('message')
const submit = document.getElementById('submit')

// Função da navegação mobile com hamburguer
hamburguer.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation-open')

    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none'
    } else {
        navigation.style.display = 'flex'
    }
})

// Função dos botões de treino

buttons.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.id === 'training-button1') {
            boxesTraining[0].style.display = 'flex'
            boxesTraining[1].style.display = 'none'
            boxesTraining[2].style.display = 'none'
            boxesTraining[3].style.display = 'none'
        } else if (botao.id === 'training-button2') {
            boxesTraining[0].style.display = 'none'
            boxesTraining[1].style.display = 'flex'
            boxesTraining[2].style.display = 'none'
            boxesTraining[3].style.display = 'none'
        } else if (botao.id === 'training-button2') {
            boxesTraining[0].style.display = 'none'
            boxesTraining[1].style.display = 'none'
            boxesTraining[2].style.display = 'flex'
            boxesTraining[3].style.display = 'none'
        } else if (botao.id === 'training-button3') {
            boxesTraining[0].style.display = 'none'
            boxesTraining[1].style.display = 'none'
            boxesTraining[2].style.display = 'none'
            boxesTraining[3].style.display = 'flex'
        }
    })
})

scheduleButtons.forEach(function (scheduleButton) {
    scheduleButton.addEventListener('click', () => {
        if (scheduleButton.id === 'monday') {
            scheduleHours[0].innerHTML = '10:00AM - 11:30AM'
            scheduleHours[1].innerHTML = ''
            scheduleHours[2].innerHTML = ''
            scheduleHours[3].innerHTML = ''
            scheduleHours[4].innerHTML = ''
            scheduleHours[5].innerHTML = '2:00PM - 3:30PM'
            scheduleHours[6].innerHTML = ''
            scheduleHours[7].innerHTML = ''
            scheduleHours[8].innerHTML = ''
            scheduleHours[9].innerHTML = ''
        } else if (scheduleButton.id === 'tuesday') {
            scheduleHours[0].innerHTML = ''
            scheduleHours[1].innerHTML = '2:00PM - 3:30PM'
            scheduleHours[2].innerHTML = ''
            scheduleHours[3].innerHTML = ''
            scheduleHours[4].innerHTML = '10:00AM - 11:30AM'
            scheduleHours[5].innerHTML = ''
            scheduleHours[6].innerHTML = ''
            scheduleHours[7].innerHTML = ''
            scheduleHours[8].innerHTML = ''
            scheduleHours[9].innerHTML = ''
        } else if (scheduleButton.id === 'wednesday') {
            scheduleHours[0].innerHTML = ''
            scheduleHours[1].innerHTML = ''
            scheduleHours[2].innerHTML = ''
            scheduleHours[3].innerHTML = ''
            scheduleHours[4].innerHTML = ''
            scheduleHours[5].innerHTML = ''
            scheduleHours[6].innerHTML = '10:00AM - 11:30AM'
            scheduleHours[7].innerHTML = ''
            scheduleHours[8].innerHTML = ''
            scheduleHours[9].innerHTML = '2:00PM - 3:30PM'
        } else if (scheduleButton.id === 'thursday') {
            scheduleHours[0].innerHTML = ''
            scheduleHours[1].innerHTML = ''
            scheduleHours[2].innerHTML = ''
            scheduleHours[3].innerHTML = '2:00PM - 3:30PM'
            scheduleHours[4].innerHTML = ''
            scheduleHours[5].innerHTML = ''
            scheduleHours[6].innerHTML = ''
            scheduleHours[7].innerHTML = ''
            scheduleHours[8].innerHTML = '10:00AM - 11:30AM'
            scheduleHours[9].innerHTML = ''
        } else if (scheduleButton.id === 'friday') {
            scheduleHours[0].innerHTML = ''
            scheduleHours[1].innerHTML = ''
            scheduleHours[2].innerHTML = '10:00AM - 11:30AM'
            scheduleHours[3].innerHTML = ''
            scheduleHours[4].innerHTML = ''
            scheduleHours[5].innerHTML = ''
            scheduleHours[6].innerHTML = ''
            scheduleHours[7].innerHTML = '2:00PM - 3:30PM'
            scheduleHours[8].innerHTML = ''
            scheduleHours[9].innerHTML = ''
        }
    })
})

// Seção do mapa

var map = L.map('map').setView([-23.023092, -43.448941], 13);
var marker = L.marker([-23.023092, -43.448941]).addTo(map);
var popup = L.popup()
    .setLatLng([-23.023092, -43.448941])
    .setContent("Av. Lúcio Costa")
    .openOn(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Validação de formulario

let validNome = true
let validEmail = true
let validSubject = true

nome.addEventListener('keyup', () => {
    if (nome.value.length > 8) {
        nome.setAttribute('style', 'border-color:green')
        validNome = true
    } else if (nome.value.length < 2) {
        nome.setAttribute('style', 'border-color:red')
        validNome = false
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length > 8) {
        email.setAttribute('style', 'border-color:green')
        validEmail = true
    } else if (email.value.length < 6) {
        email.setAttribute('style', 'border-color:red')
        validEmail = false
    }
})

subject.addEventListener('keyup', () => {
    if (subject.value.length > 6) {
        subject.setAttribute('style', 'border-color:green')
        validSubject = true
    } else if (subject.value.length < 5) {
        subject.setAttribute('style', 'border-color:red')
        validSubject = false
    }
})

submit.addEventListener('click', submitForm)

function submitForm() {
    if (validNome && validEmail && validSubject) {
        let informUser = JSON.parse(localStorage.getItem('informUser') || '[]')

        informUser.push = (
            {
                userNome: nome.value,
                userEmail: email.value,
                userSubject: subject.value
            }
        )

        localStorage.setItem('InformUser', JSON.stringify(informUser))
    }
}