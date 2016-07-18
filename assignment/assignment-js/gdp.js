//read files
var fs=require('fs');

var dataread1=fs.readFileSync('Table1.3_g20_2013.csv','utf8',function(error,data){}).toString();
var dataread2=fs.readFileSync('Table_1.3.csv','utf8',function(error,data){}).toString();
var dataread3=fs.readFileSync('datafile.csv','utf8',function(error,data){}).toString();



var result = [];


function csvToJson(csv) {
	var lines=csv.split("\r\n");
	var headers=lines[0].split(",");

  for(var i=1;i<lines.length-4;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  
		  if(currentline[j]!=undefined){
		  obj[headers[j].replace(/["]/g,'')] = currentline[j].trim().replace(/["]/g,'');
	 }else{
		   obj[headers[j].replace(/["]/g,'')] = currentline[j];
	  }
  }
	  result.push(obj);
}
return result;

}


result = csvToJson(dataread2);


 fs.writeFileSync('new.json',JSON.stringify(result));
 
///////














