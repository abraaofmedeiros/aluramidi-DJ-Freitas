const keySongs = [
    {
        key: 7,
        song: 'pom',
        down: false
    },
    {
        key: 8,
        song: 'clap',
        down: false
    },
    {
        key: 9,
        song: 'tim',
        down: false
    },
    {
        key: 4,
        song: 'puff',
        down: false
    },
    {
        key: 5,
        song: 'splash',
        down: false
    },
    {
        key: 6,
        song: 'toim',
        down: false
    },
    {
        key: 1,
        song: 'psh',
        down: false
    },
    {
        key: 2,
        song: 'tic',
        down: false
    },
    {
        key: 3,
        song: 'tom',
        down: false
    }
]

function tocaSom(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
}

keySongs.forEach(song => {
    let keyElement = document.querySelector(`.tecla_${song.song}`)

    song.keyElement = keyElement
    song.audioElement = document.getElementById(`som_tecla_${song.song}`)

    keyElement.addEventListener('click', () => {
        tocaSom(song.audioElement)
    })   

})

document.onkeydown = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {

        keySong.keyElement.classList.add('ativa')

        if(!keySong.down) {
            tocaSom(keySong.audioElement)
        }
    
        keySong.down = true

    }

}

document.onkeyup = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {
    
        keySong.keyElement.classList.remove('ativa')
        keySong.down = false

    }

}