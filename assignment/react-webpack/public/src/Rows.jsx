var React = require('react');

var Modal=require("./Modal.jsx");

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

module.exports =Rows;