<script setup>
    import Form from './components/Form.vue'
    import Alert from './components/Alert.vue'
    import Spinner from './components/Spinner.vue'
    import Weather from './components/Weather.vue'
    import useWeather from './composables/useWeather'

    const { getWeather, weather, loading, error, viewWeather } = useWeather()
</script>

<template>
    <h1 class="titulo">Search weather</h1>

    <div class="contenedor buscador-clima">
        <Form 
            @get-weather="getWeather"
        />

        <Spinner v-if="loading" />

        <Alert v-if="error">
            {{ error }}
        </Alert>

        <Weather 
            v-if="viewWeather"
            :weather="weather"
        />
    </div>
</template>

<style scoped>
</style>
