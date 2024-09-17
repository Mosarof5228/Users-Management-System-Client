import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {
            name, email
        }
        console.log(user)
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }
    return (
        <div>
            <h2>update is coming....</h2>
            <h2>{loadedUser.name}</h2>

            <form onSubmit={handleSubmit} className="w-2/3 mx-auto" >

                <label className="input my-3 input-bordered flex items-center gap-2">
                    <input type="text" name="name" defaultValue={loadedUser.name} className="grow" placeholder="Name" />
                </label>
                <label className="input my-3 input-bordered flex items-center gap-2">
                    <input type="text" defaultValue={loadedUser.email} name="email" className="grow" placeholder="your email@site.com" />
                </label>
                <input className="btn btn-outline btn-secondary btn-block" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;