<template>
  <div class="card col-md-6 col-xs-12">
    <div class="header">
      <h4 class="no-top__margin">{{title}}</h4>
      <p class="category">
        <slot name="subTitle">{{description}}</slot>
      </p>
    </div>
    <div class="content">
      <paper-table :data="data" :columns="tableColumns">

      </paper-table>
      <div>
        * related news
        * credit btn
      </div>

      <div class="footer">
        <hr>
        <div class="stats">
          {{basedOn}}
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
      title: {
        type: String,
        default: 'Title of the company'
      },
      description: {
        type: String,
        default: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.'
      },
      basedOn: {
        type: String,
        default: basedOn[getRandomInt(0, basedOn.length)]
      },
      tableColumns: {
        type: Array,
        default: () => ['Due date', 'Progress', 'Percent', 'Risk']
      },
      data: {
        type: Array,
        default: () => [
          {
            'Due date': '28.12.2018',
            'Progress': 'PROGRESS BAR HERE',
            'Percent': '4%',
            'Risk': 'STARS HERE'
          }
        ]
      }
    },
    data () {
      return {}
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initCard () {
        console.log(this.tableData)
      },
      /***
       * Assigns a random id to the chart
       */
      updateCardId () {
        var currentTime = new Date().getTime().toString()
        var randomInt = this.getRandomInt(0, currentTime)
        this.cardId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    },
    mounted () {
      this.updateCardId()
      this.$nextTick(this.initCard)
    }
  }

</script>
<style>

</style>
