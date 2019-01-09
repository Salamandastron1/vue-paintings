<template>
  <section>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </section> 
</template>

<script type="text/javascript">
  import Input from './Input.vue';
  export default {
    data() {
      return {
        message: 'This is message'
      }
    },
    name: 'Message',
    props: {
      msg: String,
    },
    components: {
      'app-input': Input,
    }
  }
</script>