import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Form = () => {
    const navigate = useNavigate();
    const [inputs, setinput] = useState([]);
    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:80/API/user/save', inputs).then(function (response) {
            console.log(response.data);
            navigate('/student');
        })
    }
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setinput(values => ({ ...values, [name]: value }));
    }
    return <div>
        <div className="inputdiv">
            <div>
                <input type="text" placeholder="name" />
            </div>
            <div>
                <input type="text" placeholder="age" />            </div>
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
        <hr/>

        <form onSubmit={SubmitHandler}>
            <label>Name: </label>
            <input type='text' name='name' onChange={changeHandler} />
            <br />
            <label>Email: </label>
            <input type='email' name='email' onChange={changeHandler} />
            <br />
            <label>Phone: </label>
            <input type='phone' name='mobile' onChange={changeHandler} />
            <br />
            <button>Save</button>
        </form>
    </div>
}

export default Form;
