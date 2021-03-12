import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [], //0
                label: "West",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [], //1
                label: "National",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [], //2
                label: "East",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [], //3 
                label: "Central",
                borderColor: "#F4D03F ",
                fill: false
            }, {
                data: [], //4
                label: "South",
                borderColor: "#c45850",
                fill: false
            }, {
                data: [], //5
                label: "North",
                borderColor: "#F39C12",
                fill: false
            },      
        ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {

            var info = response.data["items"]
            console.log(response.data["items"])
            
            for (var temp in info){
                //console.log(temp)
                this.datacollection.labels.push(info[temp]["timestamp"])   
                this.datacollection.datasets[0]["data"].push(info[temp]["readings"]["psi_twenty_four_hourly"]["west"])
                this.datacollection.datasets[1]["data"].push(info[temp]["readings"]["psi_twenty_four_hourly"]["national"])
                this.datacollection.datasets[2]["data"].push(info[temp]["readings"]["psi_twenty_four_hourly"]["east"])
                this.datacollection.datasets[3]["data"].push(info[temp]["readings"]["psi_twenty_four_hourly"]["central"])
                this.datacollection.datasets[4]["data"].push(info[temp]["readings"]["psi_twenty_four_hourly"]["south"])
                this.datacollection.datasets[5]["data"].push(info[temp]["readings"]["psi_twenty_four_hourly"]["north"])
            }
            console.log(this.datacollection.datasets[0]["dataWest"])
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}