import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Users = () => {
    const { name } = useContext(AuthContext);
    return (
        <div>
            <h2>this is users page:{name}</h2>
        </div>
    );
};

export default Users;