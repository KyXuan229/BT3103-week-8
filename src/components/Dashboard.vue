<template>
  <div>
    <div>
      <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/orders" exact>Orders</router-link></li>
          <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
        </ul>
    </div>

    <div class="chart">
      <h1 id="dashboardHeader">Bar Chart</h1>
      <BarChart></BarChart>
      <h1 id="dashboardHeader">Line Chart</h1>
      <CallAPI></CallAPI>
    </div>

  </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import CallAPI from './CallAPI.vue'
export default {
  components: {
    BarChart,
    CallAPI
  }
};
</script>

<style scoped>
#dashboardHeader {
  background-color:rgb(111, 199, 195) ;
  color:rgb(255, 255, 255);
  text-align: center;
  margin: 0;
  height: 100px;
  width: 100%;
  font-size: 69px;
  font-family:cursive ;
}

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

</style>