import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const { name } = useContext(AuthContext);


    const handleAddUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {
            name,
            email,
        }
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User Added Successfully');
                    form.reset();
                }
                console.log("From into client side", data)
            })

    }

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remainingUser = users.filter(user => user._id !== _id)
                    setUsers(remainingUser);
                    alert("Deleted Successfullyt");
                }
            })
        console.log("coming...clicked", _id);

    }
    return (
        <div className="text-center font-bold ">
            <form onSubmit={handleAddUser}>
                <input placeholder="Your Name" className="border border-black my-4" type="text" name="name" id="" /><br />
                <input placeholder="Email" className="border border-black " type="email" name="email" id="" /><br />
                <input className="btn mt-4 btn-primary" type="submit" value="Add User" />
            </form>
            <div>
                <h2>this is users page:{name}</h2>
                <h2>All User Quantity is: {users.length}</h2>
            </div>
            <div>
                {users.map(user => <p className="mt-4"
                    key={user._id}
                > Id: {user.id}Name: {user.name}Email: {user.email}

                    <button onClick={() => handleDelete(user._id)} className="btn mx-4 btn-sm btn-error">Delete</button> </p>)}

            </div>
        </div>
    );
};

export default Users;