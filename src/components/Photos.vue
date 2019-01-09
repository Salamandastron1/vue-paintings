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
      this.photos = await API.photoCleaner();
    }
  }
</script>