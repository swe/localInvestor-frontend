<template>
  <div class="row">
    <company-card type="hover" :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

    </company-card>
  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import CompanyCard from 'components/UIComponents/Cards/CompanyCard.vue'
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
      PaperTable,
      CompanyCard
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
