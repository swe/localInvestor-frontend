<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card fix-no__margin">
        <paper-table :title="title" :sub-title="subTitle" :data="data" :columns="columns">

        </paper-table>
      </div>
    </div>
  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'

  export default {
    name: 'history-grid',
    components: {
      PaperTable
    },
    data () {
      return {
      }
    },
    props: {
      title: {
        type: String,
        default: 'Loan Responses Pack '
      },
      subTitle: {
        type: String,
        default: 'You loaned this companies at '
      },
      columns: {
        type: Array,
        default: () => ['#', 'Name', 'Summary', 'Loan %', 'Expected date', 'Expected Profit']
      },
      data: {
        type: Array,
        default: () => [
          {
            '#': 0,
            name: 'No companies were credited by you',
            summary: '',
            'loan %': '',
            'expected date': '',
            'expected profit': ''
          }
        ]
      }
    },
    methods: {
      /***
       * Initializes the grid by merging the grid options sent via props and the default grid options
       */
      initGrid () {
        // var gridIdQuery = `#${this.gridId}`
        // console.log(this.data)
        // console.log(this.title)
        // console.log(this.subTitle)
      },
      /***
       * Assigns a random id to the grid
       */
      updateGridId () {
        var currentTime = new Date().getTime().toString()
        var randomInt = this.getRandomInt(0, currentTime)
        this.gridId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    },
    mounted () {
      this.updateGridId()
      this.$nextTick(this.initGrid)
    }
  }
</script>
<style>

</style>
