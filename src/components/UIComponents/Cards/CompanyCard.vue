<template>
  <div class="card col-md-6 col-xs-12">
    <div class="header">
      <h4 class="no-top__margin">{{company.title}}</h4>
      <p class="category">
        <slot name="subTitle">{{company.description}}</slot>
      </p>
    </div>
    <div class="content">
      <paper-table :data="company.tableData" :columns="tableColumns">

      </paper-table>
      <div>
        * related news
        * credit btn
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
  import PaperTable from 'components/UIComponents/PaperTable.vue'

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
    components: {
      PaperTable
    },
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
        tableColumns: ['Due date', 'Progress', 'Percent', 'Risk'],
        company: {
          title: 'Title of company',
          description: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.',
          basedOn: basedOn[getRandomInt(0, basedOn.length)],
          tableData: [{
            'Due date': '28.12.2018',
            'Progress': 'PROGRESS BAR HERE',
            'Percent': '4%',
            'Risk': 'STARS HERE'
          }]
        }
      }
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initCard () {

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
      this.$nextTick(this.initCard)
    }
  }

</script>
<style>

</style>
