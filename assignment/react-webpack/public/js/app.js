
var AppBtn=React.createClass({

    getInitialState(){
        return {view: {showModal: false},
        }
    },
    handleHideModal(){
        this.setState({view: {showModal: false}})
    },
    handleShowModal(){
        this.setState({view: {showModal: true},
        })
    },
    render :function(){
        var headingStyle = {
            fontSize: '19px',
            display:"block",
            margin:'auto',
            marginBottom: "6px"
        };
        return (<div>
            <button className="btn btn-success"  data-toggle="modal" data-target="#myModal" onClick={this.handleShowModal}>InsertData</button>
            {this.state.view.showModal ? <Modal handleHideModal={this.handleHideModal} type="InsertData"/> : null}

            <button style={headingStyle} className="btn btn-success" onClick={this.props.fn}>Search</button>
        </div>);
    }
});

var Heading = React.createClass({
    render: function () {
        var headingStyle = {
            backgroundColor: 'FloralWhite',
            fontSize: '19px'
        };
        return (<th style={headingStyle}> {this.props.heading} </th>);
    }
});

var Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (name, index) {
            return (<Heading key={"heading-" + index} heading={name}/>);
        });

        return (<tr className='table-th'> {headings} </tr>);
    }
});





var Page=React.createClass({

    update(){
        console.log("Hey Error!!!!")
        this.setState({strt:4})
        this.props.fn()
    },

    render:function(){
        return(
            <li><a href="#" onClick={this.update}>{this.props.changeSets}</a></li>
        )
    }
});

var Pagination = React.createClass({

    render() {
        var pages=this.props.changeSets.length/2
        var arr=this.props.changeSets.slice(this.props.strt,pages)
        var page=arr.map(function(data){
            return <Page changeSets={arr.indexOf(data)} fn={this.props.fn} />
        }.bind(this));
        return (

            <ul className = "pagination">
                <li><a href = "#">&laquo;</a></li>
                {page}
                <li><a href = "#">&raquo;</a></li>
            </ul>

        );
    }
});


var Rows = React.createClass({
    getInitialState(){
        return {
            showModal: false
        }
    },
    handleHideModal(e){
        e.preventDefault();
        this.setState({showModal: false})
    },
    handleShowModal(changeSet,e){
        e.preventDefault();
        this.setState({showModal: true,changeSet:changeSet})
    },
    /*deleteItem:function(id){
     $.ajax({
     type: "DELETE",
     url: 'http://localhost:8080/posts/'+this.props.changeSet.ID,
     dataType: "json",
     success: function(response) {
     console.log("successfully deleted");
     },
     error: function () {
     console.log("error");
     }
     })
     var mountNode = ReactDOM.findDOMNode(this.refs.mount);
     alert(mountNode);
     ReactDOM.unmountComponentAtNode(mountNode);
     },*/
    render: function() {
        var trStyle = {backgroundColor: 'aliceblue'};
        var rows = this.props.changeSets.map(function (changeSet, index) {

            return (<tr ref="mount" style={trStyle}>
                <td> {changeSet.NAME} </td>
                <td> {changeSet.LOCATION} </td>
                <td> {changeSet.GENDER} </td>
                <td> {changeSet.PHONE} </td>
                <td> {changeSet.AGE} </td>
                <td>
                    <button className="btn btn-success"  data-toggle="modal" data-target="#myModal" onClick={this.handleShowModal.bind(this, changeSet)}>Update</button>


                </td>
                <td> <button className="btn btn-danger"  onClick={this.props.deleteFn.bind(this,changeSet.ID)}>Delete</button></td>
            </tr>);
        }.bind(this));

        return (

            <tbody>{this.state.showModal ? <Modal handleHideModal={this.handleHideModal} data={this.state.changeSet} type="Update"/>: null}
            {rows}</tbody>);
    }
});



var Modal=React.createClass({
    getInitialState: function () {
        console.log(this.props.data);
        if(this.props.type==="InsertData")
        {
            return {
                name:'',
                location:'',
                gender:'',
                phone:'',
                age:'',
                checked: ''
            };
        }
        else if(this.props.type==="Update"){
            console.log(this.props.data)
            return {
                name:this.props.data.NAME,
                location:this.props.data.LOCATION,
                gender:this.props.data.GENDER,
                phone:this.props.data.PHONE,
                age:this.props.data.AGE,
                id:this.props.data.ID
            };
        }
        else{
            return ({});
        }
    },

    onChange: function(id){
        this.setState({checked: id});

    },

    getLocation(event){

        this.setState({location:event.target.value});


    },

    getName(event){
        this.setState({name:event.target.value});

    },
    getPhone(event){
        this.setState({phone:event.target.value});

    },
    getAge(event){
        this.setState({age:event.target.value});

    },

    getGender(event){
        this.setState({gender:event.currentTarget.value});


    },

    updateData(){

        $.ajax({
            type:"POST",
            url: "http://localhost:8080/posts",
            dataType: "json",

            data:{name:this.state.name,phone:this.state.phone,location:this.state.location,age:this.state.age,gender:this.state.checked,id:this.state.id},
            success: function(data)
            {
                if(data){

                }
                else{
                    console.log("Error on updating data");
                }
            },

        });
    },

    createData(){
        $.ajax({
            type:"POST",
            url: "http://localhost:8080/posts",
            dataType: "json",
            success: function(data) {
                if(data){
                    alert("added");
                }
                else{
                    alert("hmm...sm error....We have to debug");
                }
            },
            data:{name:this.state.name,phone:this.state.phone,location:this.state.location,age:this.state.age,gender:this.state.checked},
            error: function(err){alert(err.message);}

        });
    },

    render:function () {
        return (
            <div>
                <div className="modal fade in" id="myModal">

                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" onClick={this.props.handleHideModal}>&times;</button>
                                <h4 className="modal-title">Record</h4>
                            </div>

                            <div className="modal-body">
                                <p>Enter Details</p>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-lg-2" control label for ="inputName">Name</label>
                                        <div className="col-lg-10">
                                            <input className="form-control" placeholder="Name" type="text" onChange={this.getName} value={this.state.name}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2" control label for ="inputLocation">Location</label>
                                        <div className="col-lg-10">
                                            <input className="form-control" id="inputLocation" placeholder="Location" type="text" value={this.state.location} onChange={this.getLocation}/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label className="col-lg-2">Gender</label>

                                        <div className="col-lg-2">
                                            <label className="radio-inline">
                                                <input name="gender" id="input-gender-male" value="Male" type="radio" checked={this.state.checked === 'Male'} onChange={this.onChange.bind(this, 'Male')} />Male
                                            </label>
                                        </div>
                                        <div className="col-lg-8">
                                            <label className="radio-inline">
                                                <input name="gender" id="input-gender-female" value="Female" type="radio" checked={this.state.checked === 'Female'} onChange={this.onChange.bind(this, 'Female')}/>Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2" control label for ="inputPhone">Phone</label>
                                        <div className="col-lg-10">
                                            <input className="form-control" id="inputPhone" placeholder="Phone" value={this.state.phone} type="text" onChange={this.getPhone}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2" control label for ="inputAge">Age</label>
                                        <div className="col-lg-10">
                                            <input className="form-control" id="inputAge" placeholder="Age" value={this.state.age} type="text" onChange={this.getAge}/>
                                            {(this.props.type==="InsertData") ? <button className="btn btn-success pull-right"  onClick={this.createData}>Submit</button>: <button className="btn btn-success pull-right"  onClick={this.updateData}>Update</button>}


                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.handleHideModal}>Close</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
});



var App=React.createClass({

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
            <h3>User Profile search</h3>
            <AppBtn fn={this.loadData}/>

            <table className='table'>
                <Headings headings={this.props.headings}/>
                <Rows changeSets={this.state.changeSets} deleteFn={this.deleteData}/>
                <Pagination changeSets={this.state.changeSets} strt={this.state.strt} lmt={this.state.lmt} fn={this.loadData}/>
            </table>
        </div>);

    }

});

var headings = ['NAME', 'LOCATION', 'GENDER','PHONE','AGE','UPDATE','DELETE'];
ReactDOM.render(<App headings={headings} />,
    document.getElementById("container"));

