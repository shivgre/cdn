let settings = {        
    "url": "http://localhost/squarespacerealbama-local/embed-listings/slipstream-get-js.php?key=MOMLS-jsXPT$879",
    "method": "GET",
    "timeout": 0,
    "async": true,
};


$.ajax(settings).done(function (response) {
    $('<script>')
    .attr('type', 'text/javascript')
    .text(response)
    .appendTo('head');
    console.log(response);
});