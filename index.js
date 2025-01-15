const apiKey = "415c0c9eec40ee5809edc4bfae4a53ee"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let search = document.querySelector('#search')
let btn = document.querySelector('#btn')
let icon = document.querySelector('#icon')
let error = document.querySelector('#error')

async function checkWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        error.classList.remove('hidden')
        document.querySelector('#content').classList.add('hidden')
    }
    else{
        let data = await response.json()


        document.querySelector('#city').innerHTML = data.name
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('#wind').innerHTML = data.wind.speed + 'km/hr'
    
        if (data.weather[0].main == 'Clouds') {
            icon.src = 'images/clouds.png'
        }
        else if(data.weather[0].main == 'Clear'){
            icon.src = 'images/clear.png'
        }
        else if(data.weather[0].main == 'Rain'){
            icon.src = 'images/rain.png'
        }
        else if(data.weather[0].main == 'Mist'){
            icon.src = 'images/mist.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            icon.src = 'images/drizzle.png'
        }

        error.classList.add('hidden')
        document.querySelector('#content').classList.remove('hidden')
         
    }

    
}

btn.addEventListener('click', ()=>{
    checkWeather(search.value)
})


