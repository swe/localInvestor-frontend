<template>
  <div class="card col-md-12 col-xs-12">
    <div class="header">
      <h4 class="no-top__margin">{{title}}</h4>
      <p class="category">
        <slot name="subTitle">{{description}}</slot>
      </p>
    </div>

    <div class="content col-xs-12">
      <h5>Progress</h5>
      <!--<div class="row">-->
      {{current}}
      <loading-progress :shape="'line'"
                        :size="'150'"
                        :width="'150'"
                        :height="'6'"
                        :progress="0.30"
                        :indeterminate="false"
      />
      {{target}}
      <!--</div>-->
    </div>

    <paper-table :data="data" :columns="tableColumns">

    </paper-table>

    <div class="content col-xs-12">
      <h5>RISK</h5>
      <loading-progress class="progress-red"
                        :shape="'line'"
                        :size="'150'"
                        :width="'150'"
                        :height="'6'"
                        :progress="0.30"
                        :indeterminate="false"
      />
    </div>

    <div class="content col-xs-12">
      <button type="submit" class="btn btn-nordea btn-fill btn-wd btn-margin">
        Related News
      </button>
      <button v-on:click="investIn()" type="submit" class="btn btn-nordea btn-fill btn-wd btn-margin">
        Invest
      </button>
    </div>

    <div class="footer fix-footer__z">
      <hr>
      <div class="stats">
        {{basedOn}}
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import 'vue-progress-path/dist/vue-progress-path.css'
  import VueProgress from 'vue-progress-path'

  Vue.use(VueProgress, {
    progress: 'progress',
    shape: 'line',
    size: '200',
    width: '200',
    height: '6'
  })

  export default {
    name: 'company-card',
    components: {
      PaperTable
    },
    props: {
      counter: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: 'Title of the company'
      },
      description: {
        type: String,
        default: 'Really long description that nobody reads it anyway. Initializes the chart by merging the chart options sent via props and the default chart options.'
      },
      target: {
        type: String,
        default: '100,000 €'
      },
      current: {
        type: String,
        default: '21,000 €'
      },
      basedOn: {
        type: String,
        default: ''
      },
      tableColumns: {
        type: Array,
        default: () => ['Return date', 'Credit percent']
      },
      data: {
        type: Array,
        default: () => [
          {
            due: '28.12.2018',
            percent: '4%'
          }
        ]
      }
    },
    data () {
      return {}
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initCard () {
//        console.log(this.data)
      },
      /***
       * Assigns a random id to the chart
       */
      updateCardId () {
        var currentTime = new Date().getTime().toString()
        var randomInt = this.getRandomInt(0, currentTime)
        this.cardId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      investIn () {
        // this.counter++
      }
    },
    mounted () {
      this.updateCardId()
      this.$nextTick(this.initCard)
    }
  }

</script>
<style>
  .progress-red .progress{
    stroke: #eb7316 !important;
  }
</style>
