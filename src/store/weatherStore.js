import { defineStore } from 'pinia';
import { ref } from 'vue';

export const UseWeatherStore = defineStore('weatherStore',()=> {

const humidity = ref('')
const weather = ref('')
const temp = ref('')
const wind = ref('')

function fetchWeather (weatherURL)  {
    fetch(weatherURL)
        .then(
            (response) => {
            if (!response.ok){
                alert('error fetching')
            }
        return response.json()
        })
        .then(
            (data)=>{
            humidity.value = data.main.humidity
            weather.value = data.weather[0].main
            temp.value = data.main.temp
            wind.value = data.wind.speed
            }
        )
        }
    return { humidity, weather, temp, wind, fetchWeather }
    }
)
