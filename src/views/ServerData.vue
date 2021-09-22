<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
    </div>

    <table>
        <thead>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>gender</th>
        </thead>
        <tbody>
            <tr v-for="(list, a) in productList" :key="a">
                <td>{{ list.id }}</td>
                <td>{{ list.firstName }}</td>
                <td>{{ list.lastName }}</td>
                <td>{{ list.email }}</td>
                <td>{{ list.gender }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from "axios"
export default {
    name: "",
    component: {},
    data() {
        return {
            title: "hello woaarld",
            productList: [],
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.api(
                "https://457e6d49-9a26-4054-8238-33ede07268d5.mock.pstmn.io/test",
                "get",
                {}
            ).then((e) => e.data)
            console.log(this.productList.data)
            return this.productList.data
        },
        async api(url, methos, data) {
            return await axios({
                methos,
                url,
                data,
            }).catch((e) => {
                console.log(e)
            })
        },
    },
}
</script>

<style scoped></style>
