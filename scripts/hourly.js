// CHART 
// credit: David


Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutBack",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: true,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    // This will be in the box
    multiTooltipTemplate: "<%=datasetLabel%> : <%=value%>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function() {},

    // Function - Will fire on animation completion.
    onAnimationComplete: function() {}
};



// BEGIN LINE CHART ============================================


const lineGraphData = {
    labels: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
    datasets: [{
            label: "temperature( Fahrenheit )",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            // goings to be thats days temp
            data: []
        },
        {
            label: "Humidity",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: []
        },
        {
            label: "Dew Point",
            fillColor: "rgba(179, 229, 255, 0.2)",
            strokeColor: "rgba(179, 229, 255, 1)",
            pointColor: "rgba(179, 229, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(179, 229, 255, 1)",
            data: []
        },
        {
            label: "Wind Speed ",
            fillColor: "rgba(42, 143, 180, .2)",
            strokeColor: "rgba(42, 143, 180, 1)",
            pointColor: "rgba(42, 143, 180, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(42, 143, 180, 1)",
            data: []
        }
    ]
};

const lineGraphOptions = {
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,

    //String - A legend template
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
};



// // Loops through each day to get it's data
for (let i = 0; i < 24; i++) {
    // Gets the temp of the hour
    let hoursTemp = data.hourly[i].temp
        // This is where the data for the temp is going to get pushed
    let tempDataArea = lineGraphData.datasets[0].data;
    // Pushes the data to the place
    tempDataArea.push(hoursTemp)

    // ===============================================================

    // Gets the humidity of each hour
    let hoursHumidity = data.hourly[i].humidity

    // This is where the data for the humidity is going to get pushed
    let humDataArea = lineGraphData.datasets[1].data;

    humDataArea.push(hoursHumidity)

    // ===============================================================
    // gets the dew point of each hour
    let hoursDewPoint = data.hourly[i].dew_point
        // This is where the data for the dew point will get pushed
    let dewDataArea = lineGraphData.datasets[2].data

    dewDataArea.push(hoursDewPoint)

    // ===============================================================

    // gets the wind speed of each hour
    let hoursWindSpeed = data.hourly[i].wind_speed

    // This is where the data for the dew point will get pushed
    let windDataArea = lineGraphData.datasets[3].data

    windDataArea.push(hoursWindSpeed)

}



// Needs to be the last thing in this section

const lineCtx = document.getElementById("myGraph").getContext("2d");
const myLineChart = new Chart(lineCtx).Line(lineGraphData, lineGraphOptions);

// END LINE CHART ============================================

// DISPLAY HOURLY DATA AREA =================================================
// 6000 miliseconds are in a minute
// 60 mintues in an hour

// let millisecondsToHourAndMintues = (milliseconds) => {
//     let mintues = milliseconds / 6000
//     let hour;

//     if (mintues > 60) {

//     }

//     return `${hour}:${mintues}`
// }

function formatDuring(time) {
    let days = parseInt(time / (1000 * 60 * 60 * 24));
    let hours = parseInt(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = parseInt(time % (1000 * 60 * 60) / (1000 * 60));
    let seconds = time % (1000 * 60) / 1000;
    // Format 00 days 00 hours 00 minutes 00 seconds
    if (days < 10) {
        days = '0' + days
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return days + " " + hours + "hours" + minutes + "minutes" + seconds + "seconds";
}

console.log(formatDuring(7200000))

// END DISPLAY HOURLY DATA AREA =================================================