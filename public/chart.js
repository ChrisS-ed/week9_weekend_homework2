var chartType = function(newSeries) {
  var container = document.getElementById("chartPlace");
  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },

    plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                  }
    },

    title: {
      text: "<b>Countries by population</b>"
    },
    series: newSeries
  });
  // console.log(chart);
}
