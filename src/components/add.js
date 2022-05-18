const Add = () => {
    return <div>
        <h3>Add Student</h3>
        <hr></hr>
        <form>
            <label>Full Name</label>
            <input type='text'></input><br />
            <label>Date of Birth</label>
            <input type='date'></input><br />
            <label>School</label>
            <select id="school" name="school">
                <option value="svps">svps</option>
                <option value="svm">svm</option>
                <option value="asian">asian</option>
                <option value="mlkrjn">mlkrjn</option>
            </select><br/>
            <label>Class</label>
            <select id="school" name="school">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="1">5</option>
                <option value="2">6</option>
                <option value="3">7</option>
                <option value="4">8</option>
            </select><br/>
            <label>Division</label>
            <select id="division" name="division">
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
            </select><br/>
            <label>status</label>
            <input type="radio" id="active" name="status" value="active" />
            <input type="radio" id="inactive" name="status" value="inactive" />
            <br />
            <input type='submit'></input>
        </form>
    </div>
}

export default Add;