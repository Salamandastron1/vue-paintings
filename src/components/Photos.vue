<template>
  <section>
    <h1>hi</h1>
    <article>
    </article>
  </section>
</template>

<script type="text/javascript">
  import * as API from '../helper/API';

  export default {
    name: 'Photos',
    data() {
      return {
        photos: [],
      }
    },
    props: ['id', 'name'],
    async created() {
    //eslint-disable-next-line
      console.log('hello');
      const url = `https://api.harvardartmuseums.org/century/${this.$route.params.id}?apikey=6aadb940-12c8-11e9-b96e-b96134bf93ea`;
      const data = await API.apiCall(url);

      this.photos = API.photoCleaner(data);
    }
  }
</script>