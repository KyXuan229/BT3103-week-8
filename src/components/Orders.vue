<template>
    <div>
        <div>
            <ul>
                <li><router-link to="/" exact>Home</router-link></li>
                <li><router-link to="/orders" exact>Orders</router-link></li>
                <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
            </ul>
        
            <ul>
                <li v-for="order in orders" v-bind:key= order[0]>
                   
                    <div v-for= "(count, dish) in order[1]" v-bind:key="dish">
                        <span> {{ dish }}: {{ count }}</span>
                    </div>
                   
                    <div>
                        <button v-bind:id="order[0]" v-on:click="deleteItem($event)">
                            Delete
                        </button>

                        <button v-bind:id="order[0]" v-on:click="route($event)">
                            Modify
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import database from 'C:/Users/Shaun/bt3103-week-8/src/firebase.js'

export default {
    data() {
        return {
            orders: []
        }
    },

    created(){
        this.fetchItems()
    },

    methods: {
        fetchItems: function() {
            database.collection('orders').get().then(snapshot => {
                let order = {}
                snapshot.docs.forEach(doc => {
                    order = doc.data()
                    //order.show = false
                    //order.id = doc.id
                    this.orders.push([doc.id, order])
                });
            });
        },

        deleteItem: function(event){
            let doc_id = event.target.getAttribute("id"); 
            console.log(doc_id)
            database.collection('orders').doc(doc_id).delete().then(() => location.reload());
        },

        route: function(event){
            let doc_id = event.target.getAttribute("id");
            console.log("Route function called")
            this.$router.push({name: 'Modify', params: {id: doc_id}})
        }

    }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>