<template>
  <div class="row">

    <div class="col-md-12">
      <div class="card">
        <paper-table type="hover" :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

        </paper-table>
      </div>
    </div>

  </div>
</template>
<script>
  import HistoryGrid from 'components/UIComponents/Cards/HistoryGrid.vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['#', 'Name', 'Summary', 'Loan %', 'Expected date', 'Expected profit']
  const tableData = [{
    '#': 1,
    name: 'Dakota Rice',
    summary: '€ 1000',
    'loan %': '5',
    'expected date': '8 December',
    'expected profit': '€ 50'
  }, {
    '#': 2,
    name: 'Dakota Rice',
    summary: '€ 1000',
    'loan %': '5',
    'expected date': '8 December',
    'expected profit': '€ 50'
  }, {
    '#': 3,
    name: 'Dakota Rice',
    summary: '€ 1000',
    'loan %': '5',
    'expected date': '8 December',
    'expected profit': '€ 50'
  }, {
    '#': 4,
    name: 'Dakota Rice',
    summary: '€ 1000',
    'loan %': '5',
    'expected date': '8 December',
    'expected profit': '€ 50'
  }, {
    '#': 5,
    name: 'Dakota Rice',
    summary: '€ 1000',
    'loan %': '5',
    'expected date': '8 December',
    'expected profit': '€ 50'
  }]

  export default {
    components: {
      HistoryGrid,
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Loan Responses Pack #32',
          subTitle: 'You loaned this companies at 12 November',
          // columns: [...tableColumns],
          gridData: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
