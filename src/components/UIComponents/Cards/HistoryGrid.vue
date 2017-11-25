<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

        </paper-table>
      </div>
    </div>

  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
//  const tableColumns = ['#', 'Name', 'Summary', 'Loan %', 'Expected date', 'Expected Profit']
//  const tableData = [{
//    '#': 1,
//    name: 'Dakota Rice',
//    summary: '€ 1000',
//    'loan %': '5',
//    'expected date': '8 December',
//    'expected profit': '€ 50'
//  }, {
//    '#': 2,
//    name: 'Dakota Rice',
//    summary: '€ 1000',
//    'loan %': '5',
//    'expected date': '8 December',
//    'expected profit': '€ 50'
//  }, {
//    '#': 3,
//    name: 'Dakota Rice',
//    summary: '€ 1000',
//    'loan %': '5',
//    'expected date': '8 December',
//    'expected profit': '€ 50'
//  }, {
//    '#': 4,
//    name: 'Dakota Rice',
//    summary: '€ 1000',
//    'loan %': '5',
//    'expected date': '8 December',
//    'expected profit': '€ 50'
//  }, {
//    '#': 5,
//    name: 'Dakota Rice',
//    summary: '€ 1000',
//    'loan %': '5',
//    'expected date': '8 December',
//    'expected profit': '€ 50'
//  }]

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
        default: ['#', 'Name', 'Summary', 'Loan %', 'Expected date', 'Expected Profit']
      },
      gridData: {
        type: Array,
        default: () => [
          {
            '#': 0,
            name: 'No companies was credited by you',
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
        // @TODO: pass gridData to real grid
        console.log(this.gridData)
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
