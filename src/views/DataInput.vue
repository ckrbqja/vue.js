<template>
    <div>
        <input type="text" v-model="name" />
        <input type="text" v-model.number="age" />
        <button type="button" @click="saveInfo">저장</button>
    </div>
</template>
<script>
export default {
    name: "",
    component: {},
    data() {
        return {
            name: "",
            age: "",
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveInfo() {
            const params = {
                name: this.name,
                age: this.age,
            }

            const r = this.saveData(params)
            if (r === "S") {
                alert("성공")
            }
        },

        saveData(params) {
            console.log(params)
            const r = "S"
            return r
        },
    },
}
</script>

<style scoped></style>
