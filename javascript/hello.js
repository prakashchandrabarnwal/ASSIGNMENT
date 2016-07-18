/*var obj="Prakashchandrvbarnwal";
length=obj.length;

obj=obj.replace("v","a");
obj=obj.toUpperCase();
obj=obj.toLowerCase();
alert(obj);
*/

/*var person=new Object();
person.firstname="Prakash";
person.lastName="Barnwal";
person.fullName =function(){
return this.firstname+" "+this.lastName;
};
alert(person.fullName());

*/
/*var person={
	firstname:"Prakash",
	lastName:"Chandra",
	fullName:function(){
		return this.firstname+" "+this.lastName;
	}
}
alert(person.fullName());
*/

/*
var foo1=["chandra","barnwal"];
var reversed=foo1.reverse();
var joined=foo1.join(" . ");
var sorted=foo1.sort();
alert(reversed);
alert(joined);
alert(sorted);
*/

/*var foo="hello, window1 ";
window.alert(window.foo);
window.parseInt("3");

var bar=function(){
	var hello="hello function";
	alert(window.hello);
};
bar();
*/

/*(
	function(){

				var foo="hello, window";
				alert(foo);

              }()
)
*/


/*(function(){

	var href=window.location;
	alert(href);

	if(confirm("do you want to go LA"))
	{
		alert("i will take you there");
		location="https://www.google.co.in/maps?ion=1&espv=2&q=LA&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjDn4a0lu3NAhXFRI8KHfclDNkQ_AUICCgB";
	}
	else{
		alert("you will go to u.k.");
	}
}());

*/

/*
(function ()
	{

	var pelements=document.getElementsByTagName("p");
	
		var lastelement=pelements[pelements.length];
		alert();

		for(var i=0,len=pelements.length;i<len;i++)
		{
				alert(pelements[i]);
		}	
	}()
);*/


/*(function(){


		var pelements=document.getElementById("foo");
		
		alert(pelements);


}())
*/

/*
(function(){
	var pelements=document.querySelector("#foo");
	alert(pelements.parentNode.tagName);
			}()

);*/




/*(function()
	{
var doc=document;
		var el=doc.createElement("p");
		content=doc.createTextNode("<b>this is created dynamically</b>");
		pfoo=doc.getElementById("foo");
		el.appendChild(content);
		el.appendChild(content);
		el.setAttribute("align","center");
		el.id="bar";



document.body.appendChild(el);
	}()
	);*/




/*(function(){
	var doc=document;
	el=doc.createElement("p");
	content=doc.createTextNode("<strong>this is added dynamically</strong>");
	pfoo=doc.getElementById("foo");
	el.appendChild(content);
	el.id="bar";
	pfoo.parentNode.insertBefore(el, pfoo);
}());*/




/*(function()
			{
				var doc=document;
				el=doc.createElement("p");
				content=doc.createTextNode("<strong>this is added dynamically</strong>");
				el.appendChild(content);
				el.id="dynamicallycreatedid"
				pfoo=document.getElementById("foo");
				pfoo.parentNode.replace(el,pfoo);
			}()
);
*/


/*(function(){
	var doc=document;
		el=doc.createElement("p");
		pfoo=doc.getElementById("foo");
	el.innerHTML="<strong>dynamically insererted by innerHTML</strong>";
	pfoo.parentNode.appendChild(el);
	el.innerHTML=el.innerHTML + "<br>" +"this was too";
	el.innerHTML=el.innerHTML + "<br>" +"this was too";
	el.innerHTML=el.innerHTML + "<br>" +"this was too";
	alert(el.innerHTML);
	el.innerHTML="";
}());*/



/*(function(){

var divfoo=document.getElementById("foo1");
style=divfoo.style;
style.color="blue";
alert("color");
style.border="2px dotted red";

style.backgroundColor="green";
style.padding="50px";

}());
*/
/*(function(){
	var divfoo=document.getElementById("foo");
	//style=divfoo.style;
	divfoo.className="css-class css-class1";
	//var color=window.getComputedStyle(divfoo,null).getPropertyValue("color");
	//var color=divfoo.currentStyle["color"];
	var getstyle=function()
	alert(color);
}())
*/

/*
(function(){
var i=0;
	var doSomething=function(){
		console.log("hellllloooo"+i);
		i=i+1;
		if(i>9){
		//setTimeout(doSomething,1);
		clearInterval(timer);
	}
	};
var timer=setInterval(doSomething,2000);
//var timer=	setTimeout(doSomething,1);
//	clearTimeout(timer);
}());
*/
/*
(function(){
	moveBox=function(moveBy){
			var whichbox=document.getElementById("box");
			var moveleft=whichbox.offsetLeft;
			whichbox.style.left=moveleft+moveBy+"px";
			if((moveBy>0 && moveleft>400)||(moveBy<0 && moveleft < 10))
			{
				clearTimeout(timer);
				timer=setInterval(function(){moveBox(moveBy*-1);},10);
			}
		};
		var timer=setInterval(function(){moveBox(3)},10);
}());*/






/*
(function(){
	var timer=10;
	var moveBox=function(moveBy){
					var whichbox=document.getElementById("box");
					var moveleft=whichbox.offsetLeft;
					whichbox.style.left=moveleft+moveBy+"px";
					if((moveleft>1500)&&(moveBy>0)||(moveleft<0)&&(moveBy<0))
					{
						clearTimeout(timer);
						timer=setInterval(function(){moveBox(moveBy*-1)},timer);
					}
};
var timer=setInterval(function(){moveBox(3)},timer);

}());*/










/*
(function(){

var el=document.getElementById('box');
el.onclick=function(){
	this.style.color="yellow";
	this.style.border="4px dotted red";
}
			
}());
*/





/*(function(){
	window.onload=function(){
	var buttons=document.getElementsByTagName("button");
	for(var i=0,len=buttons.length;i<len;i++){
		buttons[i].onclick=function(){
alert("hello");
		};
	};
	}

}());*/



/*(function(){

	var buttons=document.getElementsByTagName("button");


	var buttonclick=function(){
		var className=this.innerHTML.toLowerCase();
		document.body.className=className;
	};


	for(var i=0,len=buttons.length;i<len;i++)
	{
		buttons[i].addEventListener("click",buttonclick,false);
	}

}());
*/



/*

evt.Type, evt.target, evt.preventDefault(),
event.srcElement.innerHTML.toLowerCase()//event.Type, event.srcElement, event.returnValue() 


*/


//crossbrowser
/*var addEvent=function(el,type,fn)
	{
		if(typeof addEventListener!=="undefined"){
			el.addEventListener(type,fn,false);
		}else if(typeof attachEvent !=="undefined"){
			el.attachEvent("on"+type,fn);
		}
		else{
			el["on"+type]=fn;
		}
	};

var getTarget=function(event){
	if(typeof event.target!="undefined")
	{
		return event.target;
	}else{
		return event.srcElement;
	}
};

var preventDefault=function(event){
	if(typeof event.preventDefault!=="undefined"){
		event.preventDefault();
	}else{
		event.returnValue=false;
	}*/
}




(function(){
event.utility.addEvent(document,"click",function(evt){
	var target=eventUtility.getTarget(evt),
		tagName=target.tagName;
		if(tagName==="A"){
				eventUtility.preventDefault(evt);
		}
}
});












