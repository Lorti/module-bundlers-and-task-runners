<template lang="pug">
  .container Hello {{bundler}}
</template>

<script>
    export default {
        data() {
            return {
                bundler: 'webpack'
            };
        }
    };
</script>

<style lang="scss" scoped>
    $color: green;

    .container {
        color: $color;
    }
</style>
