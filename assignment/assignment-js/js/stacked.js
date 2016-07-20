//read files
var fs=require('fs');

var dataread1=fs.readFileSync('Table1.3_g20_2013.csv','utf8',function(error,data){}).toString();
var dataread2=fs.readFileSync('Table_1.3.csv','utf8',function(error,data){}).toString();
var dataread3=fs.readFileSync('datafile.csv','utf8',function(error,data){}).toString();



var result = [];


function csvToJson(csv) {
	var lines=csv.split("\r\n");
	var headers=[];
headers[0]="x";
headers[1]="Aggregate_Population";
headers[2]="Aggregate_GDP";
  for(var i=1;i<lines.length-4;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");
		
		  obj[headers[0].replace(/["]/g,'')] = currentline[0].trim().replace(/["]/g,'');
		  obj[headers[1].replace(/["]/g,'')] = ((parseFloat(currentline[17].trim().replace(/["]/g,''))-parseFloat(currentline[14].trim().replace(/["]/g,'')))).toString();
		  obj[headers[2].replace(/["]/g,'')] = Math.abs(((parseFloat(currentline[5].trim().replace(/["]/g,''))-parseFloat(currentline[2].trim().replace(/["]/g,'')))*1000)).toString();
	 
		
	  result.push(obj);
}
return result;

}


result = csvToJson(dataread1);
console.log(result);

 fs.writeFileSync('../stacked.json',JSON.stringify(result));
 
///////














