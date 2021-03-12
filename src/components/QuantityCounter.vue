<template>
  <div>
      <button v-on:click= "decrease()">-</button> 
      &ensp; {{ counter }} &ensp;
      <button v-on:click= "increase()">+</button>
      
  </div>
</template>

<script>
export default {
    name: "QuantityCounter",
    data() {
        return {
            counter: 0,
        }
    },
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        increase: function() {
            if (this.counter === 10) {
                alert("You cannot buy more than 10 items.")
            } else {
                this.counter++
            }
            this.$emit('counter', this.item, this.counter)
        },
        decrease: function() {
            if (this.counter !== 0){
                this.counter--
            }
            this.$emit('counter', this.item, this.counter)
        }
    }
}
</script>

<style scoped>
    button {
        background-color: lightseagreen;
        border-radius: 10px;
        width: 50px;
        height: 50px;
        font-size: 40px;
        text-align: center;
    }
    
    div {
        font-size: 30px;
    }

    #message{
        font-size: 24px;
    }
</style>
