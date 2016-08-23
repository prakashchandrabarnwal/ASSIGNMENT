(function fn(){
$('.headingss').hide();	
	
	$(".create").on("click",function(){
		//alert("hi");
		var namev=$('.name').val();
		var phonev=+$(".phone").val();
		var genderv=$(".gender").val();
		var locationv=$(".location").val();
		var agev=$(".age").val();
		//console.log(namev+phonev+genderv+locationv+agev);
		//console.log("hi");
		$.ajax({
			type:"POST",
			url: "http://localhost:8010/posts",
			dataType: "json",
			success: function(data) { 
				if(data){
					alert("added");
				}
				else{
					alert("NOOOOO");
				}
			},
			data:{name:namev,phone:phonev,gender:genderv,location:locationv,age:agev},
			error: function(err){alert(err.message);}

		});
		

	}
	)
	
	$(".parent").delegate(".delete", "click", function() {
   // ...

   var i=+$(this).attr("value");
   var k=$("#update"+i);
var j=$(this);

   $.ajax({
   	dataType: "json",
   	type:"DELETE",
   	url: "http://localhost:8010/posts/"+i,
	success: function(msg){
		if(msg){
		
			j.hide();
			k.hide();
				alert("successfully deleted");
		}
		else{
			alert("CANT DELETE DATA");
		}
	}

   });
   $("input[name~="+i+"]").hide();
		
 //location.reload();
})
	
	var xx;
	
	$(".parent").delegate(".update", "click", function() {

		xx=$(this).attr("value");
		$(".disp").prop('disabled', true);
		
		$("input[name~="+xx+"]").prop('disabled', false);
		//var name=$('#name '+xx).val();
		//console.log(name);
		
	})
	$(".save").on("click",function()
	{

		var namev=$("#name"+xx).val();
		var locationv=$("#location"+xx).val();		
		var genderv=$("#gender"+xx).val();
		var phonev=$("#phone"+xx).val();
		var agev=$("#age"+xx).val();

		console.log(namev+locationv+genderv+phonev+agev);

		$.ajax({
			type:"POST",
			url: "http://localhost:8010/posts",
			dataType: "json",

			data:{id:xx,name:namev,phone:phonev,gender:genderv,location:locationv,age:agev},
			success: function(data)
			{ 
				if(data){
					alert("Saved");
				}
				else{
					alert("NOOOOO");
				}
			},

		}); 
	}
	)

	var count=0;
	$(".submit").on("click",function(){
		console.log(count);
		
			var text=$(".input").val();
		$.ajax({
			type:"GET",
			dataType: "json",
			url: "http://localhost:8010/posts/?_start="+count+"&_limit=8&q="+text,
			//url: "http://localhost:8010/posts/?q="+text,
			

			success: function(data1)
			{ 
				$('.headingss').show();
				$('button').remove();
				$(".disp").remove();
				var arr=data1;

				for(var i=0;i<arr.length;i++)
				{

					$("<button></button>",{

						height:"50px",
						text:"Delete",
						id:"todelete",
						value:arr[i].id,
						class:"w3-animate-left delete col-lg-1 col-sm-12 col-md-1 col-xs-12 w3-btn w3-round w3-red"
					}).insertAfter(".headingss");
					$("<button></button>",{
						height:"50px",
						text:"Update",
						value:arr[i].id,
						class:"update w3-animate-left col-lg-1 col-sm-12 col-md-1 col-xs-12 w3-btn w3-round w3-teal"
					}).insertAfter(".headingss").attr('id',"update"+arr[i].id);
					$("<input></input>",{
						height:"50px",
						value:arr[i].age,
						name:arr[i].id,
						id:"age"+arr[i].id,
						disabled:"disabled",
						class:"disp w3-animate-left col-lg-1 col-sm-12 col-md-1 col-xs-12 "

					}).insertAfter(".headingss");
					$("<input></input>",{
						height:"50px",
						name:arr[i].id,
						id:"phone"+arr[i].id,
						value:arr[i].phone,
						disabled:"disabled",
						class:"disp w3-animate-left col-lg-2 col-sm-12 col-md-2 col-xs-12 "
					}).insertAfter(".headingss");
					$("<input></input>",{
						height:"50px",
						name:arr[i].id,
						id:"gender"+arr[i].id,
						value:arr[i].gender,
						disabled:"disabled",
						class:"disp w3-animate-left col-lg-1 col-sm-12 col-md-1 col-xs-12 "
					}).insertAfter(".headingss");
					$("<input></input>",{
						height:"50px",
						name:arr[i].id,
						id:"location"+arr[i].id,
						value:arr[i].location,
						disabled:"disabled",
						class:"disp w3-animate-left col-lg-4 col-sm-12 col-md-4 col-xs-12 "
					}).insertAfter(".headingss");
					$("<input></input>",{
						height:"50px",
						name:arr[i].id,
						id:"name"+arr[i].id,
						value:arr[i].name,
						disabled:"disabled",
						class:"disp w3-animate-left col-lg-2 col-sm-12 col-md-2 col-xs-12 "
					}).insertAfter(".headingss");
					count=arr[i].id;
		//setTimeout(function(){ count=i; },0);
	}
	console.log(count);
},
error:function(err){
	alert("Error: "+err.message);
	}

}
);
	}
)
}());