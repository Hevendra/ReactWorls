import React from 'react';
import { UserDetail } from './ui_components/UserDetail'
import { connect } from 'react-redux'
import { userActions } from '../actions'
import '../App.css'

 class PearsonUsers extends React.Component {
    render() {
        console.log("apis data=" + this.props.data);
        var apidata = undefined;
        if (this.props.data) {
            apidata = this.props.data.data;
        }
        var userdata = [];
        
        if (apidata !== undefined && apidata.length > 0) {
            apidata.forEach(element => {
                userdata.push(<UserDetail key={element.id} data={element} handleDelete={this.props.handleDelete} />);
            })
        } else {
            userdata.push(<div key="1" className="display-name">Just a moment...</div>);
        }
        return (
            <React.Fragment>

                {userdata}

            </React.Fragment>
        )

    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    var deletedata = (id) => {
        dispatch(userActions.deleteUser(id))
    }
    return {
        handleDelete: deletedata
    }
}
//export default connect(null, mapDispatchToProps)(PearsonUsers)
PearsonUsers = connect(null,mapDispatchToProps)(PearsonUsers)
export default PearsonUsers;




