document.addEventListener('DOMContentLoaded', () => {
const grid = document.querySelector(' .grid')
const doodler = document.createElement('div')
let isGameOver = false
let platformCount = 5
let platforms = []
let doodlerLeftSpace = 50
let doodlerBottomSpace = 100

class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315
      this.bottom = newPlatBottom
      this.visual = document.createElement('div')

      const visual = this.visual
      visual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom + 'px'
      grid.appendChild(visual)
    }
  } 

  function createPlatforms() {
    for(let i =0; i < platformCount; i++) {
      let platGap = 600 / platformCount
      let newPlatBottom = 100 + i * platGap
      let newPlatform = new Platform (newPlatBottom)
      platforms.push(newPlatform)
      console.log(platforms)
    }
  }
function movePlataforms() {
  if(doodlerBottomSpace > 200) {
    platforms.forEach(platform => {
      platform.bottom -= 4
      let visual = platform.visual
      visual.style.bottom = platform.bottom + 'px'
    })
  }
}

function start() {
  if(!isGameOver) {
    createPlatforms()
    createDoodler()
    
  }
}

function createDoodler() {
    grid.appendChild(doodler)
    doodler.classList.add("doodler")
    doodlerleftspace = platforms[0].left
    doodler.style.left = doodlerleftspace + 'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
}
createDoodler()
})