<template>
    <div class="row">
      <!--Money Overview-->
      <div class="col-md-6 col-xs-12">
        <!--Money Stats cards-->
        <div class="row">
          <div class="col-lg-6 col-sm-12" v-for="stats in moneyStatsCards">
            <stats-card>
              <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
                <i :class="stats.icon"></i>
              </div>
              <div class="numbers" slot="content">
                <p>{{stats.title1}}</p>
                {{stats.value}}
                <p>{{stats.title2}}</p>
              </div>
              <div class="stats" slot="footer">
                <i :class="stats.footerIcon"></i> {{stats.footerText}}
              </div>
            </stats-card>
          </div>
        </div>
        <!--Charts-->
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <chart-card :chart-data="paymentsChart.data" :chart-options="paymentsChart.options">
              <h4 class="title" slot="title">Upcoming payments</h4>
              <span slot="subTitle">Expected date: 18 December</span>
              <span slot="footer">Based on your previous incomings</span>
              <div slot="legend">
                <i class="fa fa-circle text-success"></i> Last payments
                <i class="fa fa-circle text-warning"></i> Expected payments
              </div>
            </chart-card>
          </div>
        </div>
        <!--Payments history-->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <history-grid :title="historyTable.title" :sub-title="historyTable.subTitle" :data="historyTable.data">

              </history-grid>
            </div>
          </div>
        </div>
      </div>

      <!--Explore overview-->
      <div class="col-md-6 col-xs-12 row fix-row__margin">
        <!--Explore Stats cards-->
        <div class="row">
          <div class="col-lg-6 col-sm-12" v-for="stats in exploreCards">
            <stats-card>
              <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
                <i :class="stats.icon"></i>
              </div>
              <div class="stats" slot="footer">
                <i :class="stats.footerIcon"></i> {{stats.footerText}}
              </div>
              <div class="numbers" slot="content">
                <p>{{stats.title1}}</p>
                {{stats.value}}
                <p>{{stats.title2}}</p>
              </div>
            </stats-card>
          </div>
        </div>
        <!--Explore feed-->
        <div class="row">
          suggestions/explore feed
        </div>
      </div>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import HistoryGrid from 'components/UIComponents/Grids/HistoryGrid.vue'

  const historyTableData = [{
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
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        moneyStatsCards: [
          {
            type: 'info',
            icon: 'ti-wallet',
            title1: 'Your Balance',
            value: '500 €',
            footerText: 'Updated Just now',
            footerIcon: 'ti-reload'
          },
          {
            type: 'info',
            icon: 'ti-time',
            title1: 'Profit',
            value: '730 €',
            footerText: 'Expected on Monday',
            footerIcon: 'ti-time'
          }
        ],
        exploreCards: [
          {
            type: 'info',
            icon: 'ti-briefcase',
            title2: 'Investments',
            value: '20',
            footerText: 'During all time',
            footerIcon: 'ti-time'
          },
          {
            type: 'info',
            icon: 'ti-star',
            value: '3',
            title2: 'Suggestions',
            footerText: 'Since Yesterday',
            footerIcon: 'ti-time'
          }
        ],
        paymentsChart: {
          data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [230, 293, 380, 480, 503, 553, 600, 664],
              [230, 293, 380, 480]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: true
            },
            height: '245px'
          }
        },
        historyTable: {
          title: 'Loan Responses Pack #32',
          subTitle: 'You loaned this companies at 12 November',
          data: [...historyTableData]
        }
      }
    }
  }

</script>
<style>

</style>
