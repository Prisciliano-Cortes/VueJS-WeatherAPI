import { computed, ref } from "vue"
import axios from "axios"

const useWeather = () => {

    const weather = ref({})
    const loading = ref(false)
    const error = ref('')

    const getWeather = async({ city, country }) => {
        //*** Import Api key */
        const key = import.meta.env.VITE_API_KEY
        loading.value = true
        weather.value = {}
        error.value = ''
        
        try {
            
            //*** Get Lat and Lng */
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`

            const { data } = await axios(url)

            const { lat, lon } = data[0]

            //*** Get weather */
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

            const { data: result } = await axios(urlWeather)

            weather.value = result
        } catch {
            error.value = 'City is not found'
        } finally {
            loading.value = false
        }
    }

    const viewWeather = computed( () => {
        return Object.values(weather.value).length > 0
    })

    return {
        getWeather,
        viewWeather,
        weather,
        loading,
        error
    }
}

export default useWeather