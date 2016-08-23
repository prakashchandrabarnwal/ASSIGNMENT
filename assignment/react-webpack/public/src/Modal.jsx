var React = require('react');

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

module.exports =Modal;