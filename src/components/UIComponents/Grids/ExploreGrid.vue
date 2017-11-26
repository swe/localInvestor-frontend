<template>
  <div>
    <div class="col-md-6 col-sm-12" v-for="company1 in data">
      <company-card type="hover" :title="company1.title" :description="company1.description" :data="company1.data" :companyData="company1.companyData">

      </company-card>
    </div>
  </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import CompanyCard from 'components/UIComponents/Cards/CompanyCard.vue'

  export default {
    name: 'explore-grid',
    components: {
      PaperTable,
      CompanyCard
    },
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {}
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initGrid () {
        // console.log(this.basedOn)
      },
      /***
       * Assigns a random id to the chart
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
