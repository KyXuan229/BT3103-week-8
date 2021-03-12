import { Bar } from 'vue-chartjs'
import database from 'C:/Users/Shaun/bt3103-week-8/src/firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
      datacollection: {
        labels: [],
        datasets: [{
            label: [],
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#e6a749"],
            data: []
          }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
        }
    }
  },

  methods: {
    fetchItems: function () {  
      
        var totalOrder = {"Prawn Omelette": 0,
                        "Dry Beef Hor Fun": 0,
                        "Sambal KangKung": 0,
                        "Pork Fried Rice": 0,
                        "Mapo Tofu": 0,
                        "Cereal Prawn": 0}

        database.collection('orders').get().then(querySnapShot => {
            querySnapShot.forEach(doc => {
              var order = doc.data()
              //console.log(order)
              
              for (var food in order) {
                //console.log(food)
                //console.log(order[food])
                totalOrder[food] += order[food]
              }
            })

            for (var totalFood in totalOrder) {
              this.datacollection.labels.push(totalFood)
              this.datacollection.datasets[0].data.push(totalOrder[totalFood])
            }
            this.renderChart(this.datacollection, this.options)
        })
        
    }
  },
  created () {
      this.fetchItems()
  }

}