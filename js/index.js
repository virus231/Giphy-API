let $btn = document.querySelector('.btn')
let results = document.querySelector('#results')
document.addEventListener('DOMContentLoaded', init)

function init() {
  document.querySelector('.btn').addEventListener('click', ev => {
    ev.preventDefault()
    let str = document.querySelector('#user-search').value.trim()
    let url = `https://api.giphy.com/v1/gifs/search?api_key=6afspK3HlHMeopq6RPwqqoD2CiimI8HJ&q=${str}&limit=5&offset=0&rating=R&lang=en`
    let concat_url = url.concat(str)
    fetch(concat_url)
      .then(response => response.json())
      .then(content => {
        // console.log(content.data)
        let fig = document.createElement('figure')
        let img = document.createElement('img')
        let fg = document.createElement('figcaption')
        img.src = content.data[0].images.downsized.url
        // img.alt = content.data[0].title
        // fg.textContent = content.data[0].title
        fig.appendChild(img)
        fig.appendChild(fg)
        results.insertAdjacentElement('afterbegin', fig)
        document.querySelector('#user-search').value = ''
      })
      .catch(error => {
        console.log(error)
      })
  })
}

