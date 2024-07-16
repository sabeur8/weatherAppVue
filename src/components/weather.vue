<template>
    <div>
      <div className="card">

      <div className="search">
        <input type="text" v-model="city" placeholder="enter city name " spellCheck="true" />
        <button @click="checkWeather"> <img src="/src/images/search.png"> </button>
      </div>

      <div className="weather">

        <img :src="`/src/images/${weather}.png`" class="weather-icon"/>
        
        <h1 className='temp'> {{temp}}</h1>
        <h2 className='city'> {{city}}</h2>
        
        <div className='details'>
            <Weatherdetail data='humidity' :info = "humidity" symbole ='%' parag ='humidity'/>
            <Weatherdetail data ='wind' :info = "wind" symbole = 'kmh' parag ='wind speed'/>
        </div>

      </div>
    </div>
    </div>
  
</template>

<script setup>
import { ref } from "vue"
import Weatherdetail from "./Weatherdetail.vue";


    const city = ref('')
    const humidity = ref('')
    const weather = ref('clear')
    const temp = ref('')
    const wind = ref('')

    async function checkWeather (){

        const apiKey = "ecd160b9905d4ae007f35a7c0015e5e2"
        const apiUrl =" https://api.openweathermap.org/data/2.5/weather?&units=metric"

        try{
            const response = await fetch(apiUrl +  `&q=${city.value}` +`&appid=${apiKey}` )
            if(!response.ok){
                throw new Error("city not found ")
            }
            else{
                const data = await response.json()
                humidity.value = data.main.humidity
                weather.value = data.weather[0].main
                temp.value = data.main.temp
                wind.value = data.wind.speed
            }
        }
        catch(err){
            console.log(err.message)
            alert('city not found')
        }
        
    }
    
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins' , sans-serif;
    box-sizing: border-box;
}
body{
    background: #222;
}
.card{
    width: 90%;
    max-width: 470px;
    background: linear-gradient(135deg,#00feba,#5b548a);
    color: #fff;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
}
.search{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search input{
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    height: 60px;
    border-radius: 30px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;
}
.search button{
    border: 0;
    outline: 0;
    background: #ebfffc;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
}
.search button img {
    width: 16px;
}
.weather-icon{
    width: 170px;
    margin-top: 30px;
}
.details{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px ;
    margin-top: 50px;
}
</style>