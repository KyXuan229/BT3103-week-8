<template>
    <div> MENU:
        <ul>
            <li v-for="item in itemsSelected" v-bind:key="item[0]">
                <p>{{ item[0] }} x {{ item[1] }}</p>
            </li>
        </ul>
        <button v-on:click= "findTotal(); sendOrder()">Calculate Total</button>
        <p v-show= "showPrice">
            <br>
            Subtotal: ${{ subTotal }}
            <br><br>
            Grand Total: ${{ grandTotal }}
            
        
        </p>
        
    </div>
</template>

<script>
import database from 'C:/Users/Shaun/bt3103-week-8/src/firebase.js'
export default {
    props: {
        itemsSelected: {
            type: Array
        }
    },
    data() {
        return {
            showPrice: false,
            subTotal: 0,
            grandTotal: 0,
        }
    },
    methods : {
        findTotal: function() {
            this.subTotal = 0;
            for (var i=0; i < this.itemsSelected.length; i++) {
                this.subTotal += this.itemsSelected[i][1] * this.itemsSelected[i][2];
            } 
            this.subTotal = parseFloat(this.subTotal).toFixed(2)    
            this.showPrice = true;
        },
        sendOrder: function() {
            console.log("sendOrder function called")

            var order = {"Prawn Omelette": 0,
                        "Dry Beef Hor Fun": 0,
                        "Sambal KangKung": 0,
                        "Pork Fried Rice": 0,
                        "Mapo Tofu": 0,
                        "Cereal Prawn": 0}

            for (var i=0; i < this.itemsSelected.length; i++) {
                console.log(this.itemsSelected[i][0] + " added")
                order[this.itemsSelected[i][0]] = this.itemsSelected[i][1]
            }
            database.collection('orders').add(order).then(() => location.reload());
            
        },
    },

    watch: {
        subTotal: function() {
            this.grandTotal = parseFloat(this.subTotal * 1.07).toFixed(2);
        }
    }
}
</script>

<style>
    button {
        background-color: lightseagreen;
        border-radius: 5px;
    }
</style>