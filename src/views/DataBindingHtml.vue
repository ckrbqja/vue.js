<template>
    <div>
        <h1 v-html="htmlString"></h1>
    </div>
</template>
<script>
export default {
    name: "",
    component: {},
    data() {
        return {
            htmlString: '<p style="color:red;">This is a red string.</p>',
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {},
}
</script>

<style scoped></style>
