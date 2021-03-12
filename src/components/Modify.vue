<template>
    <div>
        <div>
            <ul>
                <li v-for="(count, dish, index) in datapacket" v-bind:key="index">
                    <p>{{dish}}: {{count}}</p>
                    <input v-bind:id= index type= "number" placeholder= 0 min="0">
                </li>
            </ul>
        </div>

        <button v-on:click="updateOrder()">Update Order</button>

            
    </div>
</template>

<script>
import database from 'C:/Users/Shaun/bt3103-week-8/firebase.js'

export default {

    props: {
        id: {
            type: String
        }
    },

    data() {
        return {
            datapacket: {}
        }
    },
    
    created(){
        this.fetchItems()
    },
    
    methods: {
        fetchItems: function() {
            database.collection('orders').get().then(snapshot => {                                   
                snapshot.forEach(doc => {
                    if (doc.id === this.id){
                        this.datapacket = doc.data()
                        
                    }
                })
            })          
        },

        updateOrder: function() {
            var copy = this.datapacket
            for (var i = 0; i < 6; i++) {
                var dish = document.getElementById(i).value
                copy[Object.keys(copy)[i]] = parseInt(dish)
            }
            database.collection('orders').doc(this.id).set(copy).then(() =>
                this.$router.push({path: '/orders'})
            )
        }
    }

    
}
</script>

<style scoped>
   ul {
        list-style-type: none;
        padding: 0;
    }

    button {
    width: 100px;
    height: 30px;
    background-color: #f7cac9;
    border-radius: 10px;
    border-width: 1px;
    }
</style>