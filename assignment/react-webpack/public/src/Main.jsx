var React = require('react');
require("../css/mycss.css");

var Headings=require("./Headings.jsx");
var AppBtn=require("./AppBtn.jsx");
var Rows=require("./Rows.jsx");
var Main = React.createClass({
	    getInitialState: function () {
        return {changeSets: [],strt:0,lmt:20};
    },

    mapDataToChangeSet: function (data) {
        return data.map(function (change, index) {
            return {
                "NAME": change.name,
                "LOCATION": change.location,
                "GENDER": change.gender,
                "PHONE": change.phone,
                "AGE": change.age,
                "ID":change.id
            }
        });
    },

    loadData: function () {
        $.ajax({
            url: "http://localhost:8080/posts/",
            context: this,
            dataType: 'json',
            type: 'GET'
        }).done(function (data) {
            var changeSets = this.mapDataToChangeSet(data);
            this.setState({changeSets: changeSets});
        });
    },

    deleteData(id){
        console.log("id :"+id);
        $.ajax({
            type: "DELETE",
            url: 'http://localhost:8080/posts/'+id,
            dataType: "json",
            success: function(response) {
                console.log("successfully deleted");
            },
            error: function () {
                console.log("error");
            }
        })
        var arr=this.state.changeSets;

        arr.map(
            function(obj,index1){
                if(obj.ID===id){
                    var index=arr.indexOf(obj);
                    arr.splice(index,1);
                    this.setState({changeSets: arr});
                }
            }.bind(this)
        )
    },
	
    render :function(){
        return(<div>
            <h3>User Profile search </h3>
			<AppBtn fn={this.loadData}/>
            <table className='table'>
                <Headings headings={this.props.headings}/>
				 <Rows changeSets={this.state.changeSets} deleteFn={this.deleteData}/>
            </table>
        </div>);

    }

});

module.exports =Main;
