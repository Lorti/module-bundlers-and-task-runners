<template lang="pug">
  .container Hello {{bundler}}
</template>

<script lang="ts">
    export default {
        data() {
            return {
                bundler: 'Parcel'
            };
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        color: green;
    }
</style>
