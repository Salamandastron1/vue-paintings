<template>
  <article 
    class="century"
    @click="centuryRoute"
  >
    <h2>{{ name }}</h2>
  </article>
</template>

<script type="text/javascript">
  export default {
    name: 'Century',
    props: ['name', 'id'],
    methods: {
      centuryRoute() {
        this.$router.push(`/century/${this.name}`)
      }
    }
  }
</script>