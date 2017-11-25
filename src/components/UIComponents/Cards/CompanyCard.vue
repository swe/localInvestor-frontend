<template>
  <div class="card col-md-6 col-xs-12">
    <div class="header">
      <h4 class="no-top__margin">{{company.title}}</h4>
      <p class="category">
        <slot name="subTitle">{{company.description}}</slot>
      </p>
    </div>
    <div class="content">
      <div>
        ## Company card

        * risk
        * due
        * percent
        * progress
        * credit btn
        * related news
        * based on your
      </div>

      <div class="footer">
        <hr>
        <div class="stats">
          {{company.basedOn}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const basedOn = [
    'based on your Facebook likes',
    'based on your previous transactions',
    'based on your Swarm check-ins',
    'help them to reach the goal',
    ''
  ]
  export default {
    name: 'company-card',
    props: {
      footerText: {
        type: String,
        default: ''
      },
      headerTitle: {
        type: String,
        default: 'Chart title'
      },
      chartType: {
        type: String,
        default: 'Line' // Line | Pie | Bar
      },
      chartOptions: {
        type: Object,
        default: () => {
          return {}
        }
      },
      chartData: {
        type: Object,
        default: () => {
          return {
            labels: [],
            series: []
          }
        }
      }
    },
    data () {
      return {
        company: {
          title: 'Title of company',
          description: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.',
          basedOn: basedOn[getRandomInt(0, basedOn.length)]
        }
      }
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initChart () {
        var chartIdQuery = `#${this.chartId}`
        this.$Chartist[this.chartType](chartIdQuery, this.chartData, this.chartOptions)
      },
      /***
       * Assigns a random id to the chart
       */
      updateChartId () {
        var currentTime = new Date().getTime().toString()
        var randomInt = this.getRandomInt(0, currentTime)
        this.chartId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    },
    mounted () {
      this.updateChartId()
      this.$nextTick(this.initChart)
    }
  }

</script>
<style>

</style>
