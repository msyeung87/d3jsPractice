//temperature forecast
var dataset = [ 61, 77, 66, 84, 66, 87, 67, 86 ];


//Width and height
var w = 600;
var h = 400;
var barPadding = 1;

/*Steps

1. find the body in the DOM
2. select all the rectangles
3.count and parse the dataset
4. create data bound elements (create a placeholder element)
5. append the element in the placeholder
6. adjust the attribute of the element
*/

//append svg to the body with attributes of width = w and height = h

//tell D3 to create an empty SVG element and add it to the DOM:
var svg = d3.select("body")
            .append("svg") 
            .attr("width", w)
            .attr("height", h);

//generate rectangles and add them to svg
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("y", function(d) {
    return h-(d*4);  //Height minus data value
    })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d) {
    return d*4;  //Just the data value
    })
   .attr("x", function(d, i) {
    return i * (w / dataset.length);
    })
    .attr("fill", function(d,i) {
        if (d>70){
            return "rgb(" + (d) + ", 0, 0 )";
        }else{
         return "rgb(0,0," + d +")" ;
        }
    });

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d,i) {
       if(i%2 !== 0){
        return 'High: '+ d + '°F';
       }else{
           return 'Low: '+ d + '°F';
       }
   })
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + 5;
   })
   .attr("y", function(d) {
        return h - (d * 4) + 15; 
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white");