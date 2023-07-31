<script setup>
    defineProps({
        weather: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="resultado">
        <h2>Weather of: {{ weather.name }}</h2>
        <p class="actual">{{ weather.main.temp }} &deg;C</p>

        <div class="temperaturas">
            <p>Min: <span>{{ weather.main.temp_min }} &deg;C</span> </p>
            <p>Max: <span>{{ weather.main.temp_max }} &deg;C</span> </p>
        </div>
    </div>
</template>