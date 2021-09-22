<template>
    <div>
        <input type="text" v-model="valueModel" />
        <input type="number" v-model="valueModel2" />
        <textarea v-model="valueModel3"></textarea>
    </div>
</template>
<script>
export default {
    name: "",
    component: {},
    data() {
        return {
            valueModel: "South Korea",
            valueModel2: 12,
            valueModel3: 12,
        }
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.valueModel2)
    },
    unmounted() {},
    methods: {},
}
</script>

<style scoped></style>
