<template>
  <div class="charts-container">
    <p class="tips">
      echarts：一个基于 JavaScript 的开源可视化图表库。 访问地址：
      <a href="https://echarts.apache.org/zh/index.html">echarts</a>
    </p>
    <div class="charts">
      <div id="langCharts" style="width: 600px; height: 400px"></div>
      <div id="frameworkCharts" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
export default {
  setup() {
    // 基于准备好的dom，初始化echarts实例
    let langCharts
    let frameworkCharts

    onMounted(() => {
      langCharts = echarts.init(document.getElementById('langCharts'))
      frameworkCharts = echarts.init(document.getElementById('frameworkCharts'))
      var langOption = {
        title: {
          text: '编程语言比例饼图',
          subtext: 'program language',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '编程语言比例',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'JavaScript' },
              { value: 735, name: 'Java' },
              { value: 580, name: 'C' },
              { value: 484, name: 'Python' },
              { value: 300, name: 'C++' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      var frameworkOptions = {
        title: {
          text: '前端框架',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: ['React', 'Vue', 'Angular'],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'React',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Vue',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Angular',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      langCharts.setOption(langOption)
      frameworkCharts.setOption(frameworkOptions)
    })

    return {
      langCharts,
      frameworkCharts,
    }
  },
}
</script>

<style scoped lang="scss">
.charts-container {
  .tips {
    background-color: #eef1f6;
    text-indent: 15px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    margin-top: 20px;
    a {
      color: #20a0ff;
    }
  }
  .charts {
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
  }
}
</style>
