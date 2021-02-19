<template>
    <button type="button"
        @click.prevent="$emit('input', !value)"
        :class="{ 'bg-adcash-dark': value, 'bg-gray-200': !value }"
        class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adcash-dark" aria-pressed="false">
        <span class="sr-only">Agree to policies</span>
        <span aria-hidden="true"
            :class="{'translate-x-5': value, 'translate-x-0': !value}"
            class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
    </button>
</template>

<script>
export default {
    props: {
        value: Boolean
    }
}
</script>