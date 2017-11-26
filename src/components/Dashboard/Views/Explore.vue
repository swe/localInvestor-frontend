<template>
  <div class="row">
    <explore-grid type="hover" :data="companies.data">

    </explore-grid>
  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import CompanyCard from 'components/UIComponents/Cards/CompanyCard.vue'
  import ExploreGrid from 'components/UIComponents/Grids/ExploreGrid.vue'

  const tableData = [
    {
      'return date': '28.12.2018',
      progress: 'LOL PROGRESS BAR HERE',
      'credit percent': '4%',
      risk: 'LOL STARS HERE'
    }
  ]

  const companiesArr = [
    {
      title: 'Title of the company',
      description: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.',
      data: [...tableData]
    },
    {
      title: 'Title of the company',
      description: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.',
      data: [...tableData]
    }
  ]

  export default {
    components: {
      PaperTable,
      ExploreGrid,
      CompanyCard
    },
    data () {
      return {
        companies: {
          data: [...companiesArr]
        }
      }
    }
  }

</script>
<style>

</style>
