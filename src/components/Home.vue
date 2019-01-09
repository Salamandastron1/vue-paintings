<template>
  <section>
    <h1>Collections</h1>
  </section>
</template>

<script type="text/javascript">
  import * as API from '../helper/API';

  export default {
    data: {
      collections: [],
      isLoading: true,
    },
    async created() {
      const url = 'https://api.harvardartmuseums.org/century/?apikey=6aadb940-12c8-11e9-b96e-b96134bf93ea&sort=temporalorder&sortorder=desc';
      const data = await API.apiCall(url)
      
      return this.collections
    }
  }
</script>