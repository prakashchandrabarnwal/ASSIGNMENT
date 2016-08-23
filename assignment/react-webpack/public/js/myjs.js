function form(){
	
	
	$(".create").on("click",function(){
		alert("hi");
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
		
		success: function(data)
		{ 
		if(data){
			alert("added");
		}
		else{
			alert("NOOOOO");
		}
		},
		data:{name:namev,phone:phonev,gender:genderv,location:locationv,age:agev}
	
		});
		
	
	}
	)
	
	$(".parent").delegate(".delete", "click", function() {
   // ...
    
        var i=+$(this).attr("value");
        
        
        $.ajax({
        dataType: "json",
        type:"DELETE",
        url: "http://localhost:8010/posts/"+i,

});
    location.reload();
})
	
	
	
	
	
	
	 var xx;
	
	$(".parent").delegate(".update", "click", function() {
    
		xx=$(this).attr("value");
		$(".disp").prop('disabled', true);
		
		$("input[name~="+xx+"]").prop('disabled', false);
		
		var name=$('#name '+xx).val();
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
			alert("added");
		}
		else{
			alert("NOOOOO");
		}
		},
		
		}); 
		
	}
	)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".submit").on("click",function(){
		
		$.ajax({
		dataType: "json",
		url: "http://localhost:8010/posts",
	  
		success: function(data1)
		{ 
			$('button').remove();
			$(".disp").remove();
			var arr=data1;
		//	console.log(arr);
			for(var i=0;i<arr.length;i++)
			{
		$("<button></button>",{
			
			 height:"50px",
			 text:"Delete",
			 id:"todelete",
			 value:i,
			 class:"delete col-lg-1 col-sm-1 col-md-1 col-xs-1 w3-btn w3-red"
		 }).insertAfter(".headingss");
		 
		 
		 $("<button></button>",{
			 height:"50px",
			 text:"Update",
			 value:i,
			 class:"update col-lg-1 col-sm-1 col-md-1 col-xs-1 w3-btn w3-teal"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
		 $("<input></input>",{
			 height:"50px",
			 value:arr[i].age,
			 name:i,
			 id:"age"+i,
			 disabled:"disabled",
			 class:"disp col-lg-1 col-sm-1 col-md-1 col-xs-1 w3-input"
			 
		 }).insertAfter(".headingss");
		 
		 
		
		 
		 $("<input></input>",{
			 height:"50px",
			 name:i,
			 id:"phone"+i,
			 value:arr[i].phone,
			 disabled:"disabled",
			 class:"disp col-lg-2 col-sm-2 col-md-2 col-xs-2 w3-input"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
		 
		 $("<input></input>",{
			 height:"50px",
			 name:i,
			 id:"gender"+i,
			 value:arr[i].gender,
			 disabled:"disabled",
			 class:"disp col-lg-1 col-sm-1 col-md-1 col-xs-1 w3-input"
		 }).insertAfter(".headingss");
		 
		 
		 
		
		 
		 $("<input></input>",{
			 height:"50px",
			 name:i,
			 id:"location"+i,
			 value:arr[i].location,
			 disabled:"disabled",
			 class:"disp col-lg-4 col-sm-4 col-md-4 col-xs-4 w3-input"
		 }).insertAfter(".headingss");
		 
		 
		 
		 
		 $("<input></input>",{
			 height:"50px",
			 name:i,
			 id:"name"+i,
			 value:arr[i].name,
			 disabled:"disabled",
			 class:"disp col-lg-2 col-sm-2 col-md-2 col-xs-2 w3-input"
		 }).insertAfter(".headingss");
		 
			}
			
			
		}});
		
	
	}

	
)
	
	
	
	
	
	
}