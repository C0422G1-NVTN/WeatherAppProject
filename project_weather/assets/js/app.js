var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')

async function changeWeatherUI(){
    let capitalSearch = search.value.trim();
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=94929ba0d51beac2afbd1b4df750135c`;
    let data = await fetch(apiURL).then(res=> res.json())

    if(data.cod == 200){
    content.classList.remove('hide')
    let temp = Math.round((data.main.temp - 273.15 ))
    city.innerText= data.name
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    sun.innerText = data.main.humidity + '%'
    value.innerHTML = temp +'<sup>o</sup>' + 'C'
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
    time.innerText = new Date().toLocaleString('vi')
    }else{
        content.classList.add('hide')
    }
}
search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        changeWeatherUI()
    }
})