<template>
  <div class="row">

    <div class="col-md-12">
      <div class="card card-plain">
        <paper-table type="hover" :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

        </paper-table>
      </div>
    </div>

  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['No', 'Name', 'Location', 'Risks', 'Return']
  const tableData = [
    {
      no: 1,
      name: 'Hewlett Packard Enterprise',
      location: 'Santa Clara, CA, USA',
      risks: 'Low',
      return: '1 month'
    },
    {
      no: 2,
      name: 'Nordea Bank AB',
      location: 'Stockholm, Sweden',
      risks: 'Medium',
      return: '2 months'
    }
  ]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Companies rating',
          subTitle: 'Based on risks and return time',
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
