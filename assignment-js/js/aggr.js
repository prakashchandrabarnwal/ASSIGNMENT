//read files
var fs=require('fs');

var dataread1=fs.readFileSync('Table1.3_g20_2013.csv','utf8',function(error,data){}).toString();
var dataread2=fs.readFileSync('Table_1.3.csv','utf8',function(error,data){}).toString();
var dataread3=fs.readFileSync('datafile.csv','utf8',function(error,data){}).toString();


var continents=["AUSTRALIA","AMERICA","AFRICA","EUROPE","ASIA"];
var result = [];
var headings=[];
headings[0]="Continent";
headings[1]="Aggregate Population (till 2015)";
headings[2]="Aggregate GDP (till 2015)";

function csvToJson(csv) {
	var lines=csv.split("\r\n");
var temp_population1=0;
var temp_gdp1=0;
var temp_population2=0;
var temp_gdp2=0;
var temp_population3=0;
var temp_gdp3=0;
var temp_population4=0;
var temp_gdp4=0;
var temp_population5=0;
var temp_gdp5=0;

  for(var i=1;i<lines.length-2;i++){
	
	var line=lines[i].split(",");
	if(line[0] == "Australia")
		{
			
			temp_population1=parseFloat(temp_population1)+parseFloat(line[7]);
			temp_gdp1=parseFloat(temp_gdp1)+parseFloat(line[13]);
			
		}
	if(line[0] == "Argentina"||line[0] == "Canada"||
		line[0] == "Brazil"||line[0] == "Mexico"||
		line[0] == "USA")
		{
			
			temp_population2=parseFloat(temp_population2)+parseFloat(line[7]);
			temp_gdp2=parseFloat(temp_gdp2)+parseFloat(line[13]);
		}
	if(line[0] == "South Africa")
		{
			
			temp_population3=parseFloat(temp_population3)+parseFloat(line[7]);
			temp_gdp3=parseFloat(temp_gdp3)+parseFloat(line[13]);
		}
	if(line[0] == "European Union")
		{
			
			temp_population4=parseFloat(temp_population4)+parseFloat(line[7]);
			temp_gdp4=parseFloat(temp_gdp4)+parseFloat(line[13]);
		}
	if(line[0] === "China"||line[0] === "India"||
		line[0] === "Indonesia"||line[0] === "Russia"||
		line[0] === "Saudi Arabia"||line[0] === "Republic of Korea"||
		line[0] === "Turkey"||line[0] === "Japan")
		{
			
			temp_population5=parseFloat(temp_population5)+parseFloat(line[7]);
			temp_gdp5=parseFloat(temp_gdp5)+parseFloat(line[13]);
		}
	
	  
	  
	  
}
		for (i =0; i< 5; i++) 
		{
			var obj={};
			if(i==0)
			{
				obj[headings[0]]=continents[0];
				obj[headings[1]]=temp_population1;
				obj[headings[2]]=temp_gdp1;
				result.push(obj);
			}
			if(i==1)
			{
				obj[headings[0]]=continents[1];
				obj[headings[1]]=temp_population2;
				obj[headings[2]]=temp_gdp2;
				result.push(obj);
			}
			if(i==2)
			{
				obj[headings[0]]=continents[2];
				obj[headings[1]]=temp_population3;
				obj[headings[2]]=temp_gdp3;
				result.push(obj);
			}
			if(i==3)
			{
				obj[headings[0]]=continents[3];
				obj[headings[1]]=temp_population4;
				obj[headings[2]]=temp_gdp4;
				result.push(obj);
			}
			if(i==4)
			{
				obj[headings[0]]=continents[4];
				obj[headings[1]]=temp_population5;
				obj[headings[2]]=temp_gdp5;
				result.push(obj);
			}
			
		}
return result;

}


result = csvToJson(dataread2);


 fs.writeFileSync('aggr.json',JSON.stringify(result));
 
///////














