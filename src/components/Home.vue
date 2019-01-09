<template>
  <section>
    <h1>Collections</h1>
    <section class="centuries">
      <Century 
        v-for="century in collections"
        v-bind:key="century.id"
        v-bind:name="century.name"
        v-bind:id="century.id"
      />
    </section>
  </section>
</template>

<script type="text/javascript">
  import * as API from '../helper/API';
  import Century from './Century.vue';

  export default {
    data (){
      
      return { 
        collections: [],
        isLoading: true,
      }
    },
    async created() {
      const url = 'https://api.harvardartmuseums.org/century/?apikey=6aadb940-12c8-11e9-b96e-b96134bf93ea&sort=temporalorder&sortorder=desc';
      const data = await API.apiCall(url)
      
      return this.collections = API.centuryCleaner(data)
    },
    name: 'Home',
    components: {
      Century,
    }
  }
</script>