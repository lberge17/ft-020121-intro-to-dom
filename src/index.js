const imgDiv = document.getElementById('container')

// memes.forEach(url => {
//    imgDiv.innerHTML += `<img src=${url}>`
// })

memes.forEach(url => {
    const img = document.createElement('img')
    img.src = url    
    img.alt = "meme"
    imgDiv.append(img)
})

