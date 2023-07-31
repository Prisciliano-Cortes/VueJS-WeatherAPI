<script setup>
    import { reactive, ref } from 'vue';
    import Alert from'./Alert.vue'

    const countries = [
        { code: 'US', name: 'Estados Unidos' },
        { code: 'MX', name: 'México' },
        { code: 'AR', name: 'Argentina' },
        { code: 'CO', name: 'Colombia' },
        { code: 'CR', name: 'Costa Rica' },
        { code: 'ES', name: 'España' },
        { code: 'PE', name: 'Perú' }
    ]

    const search = reactive({
        city: '',
        country: ''
    })

    const error = ref('')

    const emit = defineEmits([
        "get-weather"
    ])

    const checkWeather = () => {
        if (Object.values(search).includes('')) {
            error.value = 'Fields is required'
            return
        }

        error.value = ''

        emit('get-weather', search)
    }

</script>

<template>
    <form 
        class="formulario"
        @submit.prevent="checkWeather"
    > 
        <Alert v-if="error">
            {{ error }}
        </Alert>

        <div class="campo">
            <label for="city">City</label>
            <input 
                type="text"
                id="city"
                placeholder="City"
                v-model="search.city"
            />
        </div>

        <div class="campo">
            <label for="country">Country</label>
            <select 
                id="country"
                v-model="search.country"
            >
                <option value=""> --Select country -- </option>
                <option 
                    v-for="country in countries"
                    :key="country.code"
                    :value="country.code"
                >
                    {{ country.name }}
                </option>
            </select>
        </div>

        <input 
            type="submit"
            value="Check weather"
        />
    </form>
</template>