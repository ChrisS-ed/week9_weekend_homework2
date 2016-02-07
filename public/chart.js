var chartType = function() {
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
      text: "<b>Pokemon types I've caught</b>"
    },
    series: [{
      name: "Pokemon owned",
      data: [
        {
          name: "Fire",
          y: 74,
          color: "#ffac33"
        },
        {
          name: "Water",
          y: 25,
          color: "#73b7ff",
          sliced: true
        },
        {
          name: "Grass",
          y: 1,
          color: "#00ba2f"
        }
      ]
    }]
  });
  // console.log(chart);
}
