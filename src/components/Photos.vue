<template>
  <section>
    <router-link to="/">Back to Collections</router-link>
    <section class="photo-container">
      <article 
        v-for="photo in photos"
        class="img"
        v-bind:style="{ backgroundImage: 'url(' + photo.baseimageurl + ')'}"
      >
      </article>
    </section>
  </section>
</template>

<script type="text/javascript">
  import * as API from '../helper/API';

  export default {
    name: 'Photos',
    data() {
      return {
        photos: [],
        century: '',
      }
    },
    async created() {
      this.photos = await API.photoCleaner();
    }
  }
</script>