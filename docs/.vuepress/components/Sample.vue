<template>
    <div><span class="title">サンプルのコンポーネントだよ</span>{{$page}}</div>
</template>

<script>
    export default {
        name: "Sample",
        mounted() {
            console.log(this.$page)
        }
    }
</script>

<style scoped lang="scss">
    .title{
        font-size: 20px;
        color:red;

    }
</style>