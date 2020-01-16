var summaryValues =
    [['85%', 1], ['87%', 2], ['87.4%', 1], ['89%', 2], ['89.2%', 1],
    ['90%', 2], ['90.2%', 1], ['90.5%', 2], ['91%', 1], ['92%', 2], ['93%', 6], ['93.7%', 1],
    ['94%', 1], ['94.5%', 1], ['96%', 1]];

var busaValues =
    [['76%', 1], ['79%', 1], ['80%', 1], ['81%', 1], ['82%', 2], ['83%', 2],
    ['86%', 3], ['88%', 1], ['93%', 1]];

var commValues =
    [['77%', 1], ['78%', 1], ['83%', 2], ['84%', 1], ['85%', 1], ['86%', 1], ['87%', 2],
    ['92%', 2], ['93%', 2], ['96%', 1]];

var carlyValues =
    [['94%%', 2], ['95%', 1], ['96%', 2], ['97%', 8], ['98%', 2], ['99%', 1]];

var mathValues =
    [['77%', 1], ['78%', 1], ['83%', 2], ['84%', 1], ['85%', 1], ['86%', 1],
    ['87%', 2], ['92%', 2], ['93%', 2], ['96%', 1]];

var javaValues =
    [['89%', 1], ['90%', 2], ['91%', 4], ['92%', 3], ['93%', 3], ['95%', 2], ['97%', 1]];

var webdevValues =
    [['90%', 2], ['92%', 1], ['93%', 2], ['94%', 2], ['95%', 3], ['96%', 4], ['97%', 1]];

// Load Charts and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(summaryChart);
google.charts.setOnLoadCallback(summary);
google.charts.setOnLoadCallback(java);
google.charts.setOnLoadCallback(busa);
google.charts.setOnLoadCallback(comm);
google.charts.setOnLoadCallback(math);
google.charts.setOnLoadCallback(carly);
google.charts.setOnLoadCallback(webdev);

// Callback that creates and populates a data table, 
// instantiates the pie chart, passes in the data and
// draws it.
function summaryChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(summaryValues);

    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'Summary (27 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        'backgroundColor': 'transparent'
    };

    //Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('summary'));
    chart.draw(data, options);


    // function resize() {
    //     var chart = new google.visualization.ColumnChart(document.getElementById('summary'));
    //     chart.draw(data, options);
    // }

    // window.onload = resize;
    // window.onresize = resize;
}


function busa() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(busaValues);
    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'BUSA 2720 - Business (13 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        'backgroundColor': 'transparent'
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('busa'));
    chart.draw(data, options);
}

function comm() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(commValues);

    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'COMM 1116 - Business Communications (14 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        backgroundColor: { fill: 'transparent' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('comm'));
    chart.draw(data, options);
}

function carly() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(carlyValues);

    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'COMP 1111 - Essentials (16 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        backgroundColor: { fill: 'transparent' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('carly'));
    chart.draw(data, options);
}

function math() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(mathValues);

    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'COMP 1113 - Math (16 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        backgroundColor: { fill: 'transparent' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('math'));
    chart.draw(data, options);
}

function java() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(javaValues);

    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'COMP 1510 - Java (15 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        backgroundColor: { fill: 'transparent' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('java'));
    chart.draw(data, options);
}

function webdev() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Percentage Grade');
    data.addColumn('number', 'Jan 2018 Intake Students');
    data.addRows(webdevValues);

    // Set chart options
    var options = {
        'titleTextStyle': { fontSize: 20 },
        'legend.textStyle': { fontSize: 16 },
        'title': 'COMP 1536 - Web Development (16 Responses)',
        'width': window.innerWidth - 50,
        'height': window.innerHeight - 50,
        backgroundColor: { fill: 'transparent' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('webdev'));
    chart.draw(data, options);


}

$(window).resize(function(){
    summaryChart();
    busa();
    java();
    busa();
    comm();
    math();
    carly();
    webdev();

  });
