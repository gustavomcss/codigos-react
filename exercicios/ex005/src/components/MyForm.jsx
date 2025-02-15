// Import Component Style
import './MyForm.css';

// Import UseState
import { useState } from "react";

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "user");

    const HandleName = (e) => {
        setName(e.target.value);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(name, email, bio, role);

        setName("");
        setEmail("");
        setBio("");
    };

    return (
        <>
            <form onSubmit={HandleSubmit}>

                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Enter your Full Name" value={name} onChange={HandleName} />

                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="User Description" value={bio} onChange={(e) => setBio(e.target.value)} ></textarea>
                </label>

                <label>
                    <span>Role in the System:</span>
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)} >
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="user">User</option>
                    </select>
                </label>

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default MyForm;