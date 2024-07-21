import { defineStore } from 'pinia';
import { ref } from 'vue';

const weatherStore = defineStore('weatherStore', {

    state : () =>({

    city : ref(''),
    humidity : ref(''),
    weather : ref(''),
    temp : ref(''),
    wind : ref('')

    }),

    getters : {
        fetchWeater : (weatherURL) => {
            fetch(weatherURL)
            .then(
                (response) => {
                    if (!response.ok){
                        alert('error fetching')
                    }
                    else{
                        const data = response.json()
                        humidity.value = data.main.humidity
                        weather.value = data.weather[0].main
                        temp.value = data.main.temp
                        wind.value = data.wind.speed
                    }
                }
            )
        }
    }
})
export default weatherStore;