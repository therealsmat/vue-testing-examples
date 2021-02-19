<template>
<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
  <div class="relative max-w-xl mx-auto">
    <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    
    <div class="w-full flex items-center justify-center">
        <img src="https://adcash.com/wp-content/themes/adcash/assets/dist/img/logo-adcash.svg" alt="adcash logo"> 
    </div>
    <div class="text-center mt-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ml-2">Support Center</h2>
    </div>
    <div class="mt-12">
      <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
          <div class="mt-1">
            <input v-model="info.firstName" type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-adcash-dark focus:border-adcash-dark border-gray-300 rounded-md">
          </div>
        </div>
        <div>
          <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
          <div class="mt-1">
            <input v-model="info.lastName" type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm focus:ring-adcash-dark focus:border-adcash-dark border-gray-300 rounded-md">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <div class="mt-1">
            <input v-model="info.email" id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-adcash-dark focus:border-adcash-dark border-gray-300 rounded-md">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select v-model="info.region" id="country" name="country" class="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-adcash-dark focus:border-adcash-dark rounded-md">
                <option>NG</option>
                <option>TR</option>
                <option>EE</option>
                <option>UA</option>
                <option>IN</option>
                <option>EG</option>
                <option>RU</option>
              </select>
            </div>
            <input v-model="info.phone" type="text" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full pl-20 focus:ring-adcash-dark focus:border-adcash-dark border-gray-300 rounded-md" placeholder="+234 567 8910">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <div class="mt-1">
            <textarea v-model="info.message" id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-adcash-dark focus:border-adcash-dark border-gray-300 rounded-md"></textarea>
          </div>
        </div>
        <div class="sm:col-span-2">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <ToggleButton v-model="info.iAgree"/>
            </div>
            <div class="ml-3">
              <p class="text-base text-gray-500">
                By selecting this, you agree to the
                <a href="#" class="font-medium text-gray-700 underline">Privacy Policy</a>
                and
                <a href="#" class="font-medium text-gray-700 underline">Cookie Policy</a>.
              </p>
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <button @click.prevent="submit" type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-adcash-dark hover:bg-adcash-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adcash-dark">
            Yalla Habibi &rarr;
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

</template>

<script>
import ToggleButton from './ToggleButton.vue';
export default {
    data() {
        return {
            info: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                region: 'NG',
                iAgree: false,
            }
        }
    },
    methods: {
        async submit() {
            const { data } = await this.$http.support.createTicket(this.info);
            console.log(data);
        }
    },
    components: { ToggleButton }
}
</script>