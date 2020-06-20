const bodyElement = document.querySelector('body')

let bodyButton = document.createElement('button')
bodyButton.className = 'buttonRemove'
bodyButton.append('Remove the Main')
bodyElement.append(bodyButton)

let bodyMain = document.createElement('main')
bodyElement.append(bodyMain)

let mainImage = document.createElement('img')
mainImage.src = 'https://cdn.discordapp.com/emojis/697720586859708456.gif?v=1'
bodyMain.append(mainImage)

let mainAnchor = document.createElement('a')
mainAnchor.href = 'https://www.wikipedia.org/'
mainAnchor.append('Link to Wikipedia')
bodyMain.append(mainAnchor)

const removeMain = document.querySelector('.buttonRemove')
removeMain.addEventListener('click', function () {
    const mainRemove = document.querySelector('main')
    mainRemove.remove()
})