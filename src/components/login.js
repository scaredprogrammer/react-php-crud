import './login.css';
const Login =()=>{
const onSubmitHandler =(event)=>{
    event.preventDefault();
}
return (<div className='parent'>
    <div className='child'>
        <form onSubmit={onSubmitHandler}>
        <h3>Login to your account</h3>
        <label>Email ID/Phone Number</label><br/>
        <input type='text'></input><br/>
        <label>Password</label><br/>
        <input type='text'></input><br/>
        <input type='submit' ></input>
        </form>
    </div>
</div>
)
}
export default Login;

