<template>
  <div class="row">
    <company-card type="hover" :title="company1.title" :description="company1.description" :data="company1.data">

    </company-card>
  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import CompanyCard from 'components/UIComponents/Cards/CompanyCard.vue'
  const tableData = [
    {
      'return date': '28.12.2018',
      progress: 'LOL PROGRESS BAR HERE',
      'credit percent': '4%',
      risk: 'LOL STARS HERE'
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
