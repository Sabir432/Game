let input = document.querySelector('.input'),
  btn = document.querySelector('.btn'),
  time = document.querySelector('.time'),
  gameZone = document.querySelector('.game__zone'),
  score = 0,
  gameTime = 0,
  interval = 0

btn.addEventListener('click', () => {
  if (input.value > 4) {
    gameTime = input.value
    input.value = ''
    gameZone.innerHTML = ''
    score = 0
    start()
  } else {
    alert('Нужно вести минимум 5 секунд')
  }
})

gameZone.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    score++
    event.target.remove()
    createBall()
  }
})

function start() {
  time.innerHTML = gameTime
  interval = setInterval(() => decrease(), 1000)
  createBall()
}

function decrease() {
  if (gameTime == 1) {
    time.innerHTML = 0
    end()
  } else {
    time.innerHTML = --gameTime
  }
}

function end() {
  gameZone.innerHTML = `<h2>Вы набрали ${score} баллов</h2>`
  clearInterval(interval)
}

function createBall() {
  let ball = document.createElement('div')
  let size = random(30, 70, 100, 120)
  ball.classList.add('ball')
  ball.style.width = size + 'px'
  ball.style.height = size + 'px'
  ball.style.backgroundColor = getRandomColor()
  //   ball.style.background = getRandomBackground()
  let params = gameZone.getBoundingClientRect()

  ball.style.top = random(0, params.height - size) + 'px'
  ball.style.left = random(0, params.width - size) + 'px'

  gameZone.append(ball)
}

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

let colors = [
  'rgb(178, 30, 148)',
  'rgb(0, 174, 255)',
  'rgb(166, 0, 175)',
  'rgb(43, 57, 216)',
  'rgb(246, 16, 85)',
]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

// let backgrounds = [
//         triangle,
//         square,
//         ellips
// ]

// function getRandomBackground() {
//         return backgrounds[Math.floor(Math.random() * backgrounds.length)]
// }
