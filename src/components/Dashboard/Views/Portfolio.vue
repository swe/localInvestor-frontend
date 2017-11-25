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
  const tableColumns = ['#', 'Name', 'Summary', 'Loan %', 'Expected date', 'Expected Profit']
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
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Loan Responses Pack #2',
          subTitle: 'You loaned this companies at 8 November',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
