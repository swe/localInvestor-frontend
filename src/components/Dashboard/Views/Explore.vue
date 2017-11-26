<template>
  <div class="row">
    <company-card type="hover" :title="company1.title" :description="company1.description" :tableData="company1.tableData">

    </company-card>
  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import CompanyCard from 'components/UIComponents/Cards/CompanyCard.vue'
  const tableData = [
    {
      'Due date': 'LOL 28.12.2018',
      'Progress': 'LOL PROGRESS BAR HERE',
      'Percent': 'LOL 4%',
      'Risk': 'LOL STARS HERE'
    }
  ]

  export default {
    components: {
      PaperTable,
      CompanyCard
    },
    data () {
      return {
        company1: {
          title: 'Title of the company',
          description: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.',
          data: [...tableData]
        }
      }
    }
  }

</script>
<style>

</style>
