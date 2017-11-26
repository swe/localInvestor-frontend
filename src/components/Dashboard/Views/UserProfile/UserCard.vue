<template>
  <div class="card card-user">
    <div class="image">
      <img src="static/img/background.jpg" alt="...">
    </div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" src="static/img/faces/face-1.jpg" alt="...">
        <h4 class="title">John Doe
          <br>
        </h4>
      </div>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        details: [
          {
            title: '5000 €',
            subTitle: 'Balance'
          },
          {
            title: '2000 €',
            subTitle: 'Invested'
          },
          {
            title: '730 €',
            subTitle: 'Profit'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-3'
        } else {
          return 'col-md-4'
        }
      }
    }
  }

</script>
<style>
  
</style>
