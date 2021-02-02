import React, { Component } from "react";
import axios from 'axios';



 class Display extends Component {
      state = {
        users: [],
        isLoaded: false
      }
      componentDidMount() {
        axios.get('http://localhost:8080/users/all')
           .then(response => {
            this.setState({
              isLoaded: true,
              users: response.data
            });
          });
      }

      deleteSelectedData = (id, e) => {
        e.preventDefault();
        axios.delete('http://localhost:8080/users/delete/'+id)
          .then(response => {
            console.log(response.data);

            const usersNew = this.state.users.filter(item => item.userId !== id);
            this.setState({ users: usersNew });
            // browserHistory.push('/sign-in');
            //return <Redirect to="/sign-in" />
            this.props.history.push("/sign-in");
            
          })
      }

     /*  updateSelectedData = (id, e, item) => {
        axios.put('http://localhost:8080/users/update/'+id,item)
        .then(response => {
            alert(response.data);
            this.setState({ users: response.data});
            this.props.history.push("/sign-up");
        })
      } */
      updateSelectedData = (id, e, item) => {
       
        
       }

      render() {
        return (
        <div>
        <table border="1" width="50%">
        { <thead>
        <tr>
          <td>User Id</td>
          <td>Email</td>
          <td>Password</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Delete Data</td>
          <td>Update</td>
        </tr>
        </thead> }
        <tbody>
        {this.getRowsData()}
        </tbody>
        </table>
        </div>
        
        );
        }

        
        
        getRowsData = function(){
          return this.state.users.map((item)=>{
          return <tr key={item.userId}>
            <td>{item.userId}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td><button type="submit" onClick={(e) => this.deleteSelectedData(item.userId, e)}>Delete</button></td>
            <td><button type="submit" onClick={(e) => this.updateSelectedData(item.userId, e,item)}>Update</button></td>
          </tr>
          })
        }

        
      }

//   render() {

//     const { users } = this.state;
//     if (!this.state.isLoaded) {
//       return <div>Loading ... </div>
//     } else {
//       return (
//         <table>
//           <th>
//             <td>UserID</td>
//             <td>EMAIL</td>
//             <td>PASSWORD</td>
//             <td>FIRSTNAME</td>
//             <td>LASTNAME</td>
//           </th>
//           <tbody>
//              users.map(item => {
//                return ( <tr>
//                <td>{item.userId}</td>
//                    <td>{item.email}</td>
//                    <td>{item.password}</td>
//                    <td>{item.firstName}</td>
//                    <td>{item.lastName}</td>
//                </tr> )
//              } 
//     )
//           </tbody>

//               </table>

//       );
//     }
//   }
// }
        
export default Display;