import img from './assets/imgs/img23.jpg'
import css from './assets/css/my.css'

const image = new Image()
image.src = img
document.body.appendChild(image)

console.log('hello Webpack !!')
document.getElementById('root').innerHTML = '<h1>Hello Everyone</h1>'