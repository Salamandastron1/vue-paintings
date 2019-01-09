<template>
  <section>
    <input v-bind:value="msg" @input="changeMessage"/>
    <p>{{ message }}</p>
  </section>
</template>

<script type="text/javascript">
  export default {
    props: [
      'msg'
    ],
    data() {
      return {
        message: '',
      }
    },
    methods: {
      changeMessage(e) {
        this.message = event.target.value;
        this.$emit('messageChanged', this.message);
      }
    },
  }
</script>