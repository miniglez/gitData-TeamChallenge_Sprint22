import { useSelector } from "react-redux";


const UserData = () => {

    const user = useSelector((state) => state.user)

    return (
        <div className="userData">
            <h1>Datos de usuario: </h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.userName}</li>
                <li>Followers: {user.followers}</li>
                <li>Public Respositories: {user.publicRespositories}</li>
            </ul>
            <img src={user.image} alt={`${user.name} image`} />
        </div>
    )
}

export default UserData