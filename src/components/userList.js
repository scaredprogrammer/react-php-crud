import axios from "axios";
import './userList.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost:80/API/user/').then(function (response) {
            console.log(response.data);
            setUsers(response.data)

        })
    }
    const deleteUser =(id)=>{
        axios.delete(`http://localhost:80/API/user/${id}/delete`).then(function(response){
            console.log(response.data)
            getUsers()
        })
    }
    return <div className="formouter">
        <div className="inputdiv">
            <div>
                <input  type="text" placeholder="name"  />
            </div>
            <div>
            <input  type="text" placeholder="age"  />            </div>
            <div><div className="dropdown show">
                <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    School
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">school1</a>
                    <a className="dropdown-item" href="#">school2 </a>
                    <a className="dropdown-item" href="#">school3</a>
                </div>
            </div>
            </div>
            <div><div className="dropdown show">
                <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    class
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">class1</a>
                    <a className="dropdown-item" href="#">class2</a>
                    <a className="dropdown-item" href="#">class3</a>
                </div>
            </div>
            </div>
            <div><div className="dropdown show">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Division
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">division1</a>
                    <a className="dropdown-item" href="#">division2</a>
                    <a className="dropdown-item" href="#">division3</a>
                </div>
            </div>
            </div>
            <div><button className="btn btn-outline my-2 my-sm-0 " type="submit">Search</button></div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>

                {users.map((user, key) =>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                            
                            <button onClick={()=>deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                )}

            </tbody>
        </table>
    </div>
}

export default UserList;