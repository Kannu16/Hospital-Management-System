google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Full Recovered", 27],
    ["Total Patient", 55],
    ["Treatment Going on", 15],
    ["New patient", 13],
  ]);

  var options = {
    title: "Patients Activities",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

//Fetch api
