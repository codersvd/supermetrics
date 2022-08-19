import {observer} from "mobx-react";
import useToken from "../hooks/useToken";
import "./layout.scss";

export const HeaderLinks = observer(() => {
    const {token, setToken} = useToken();

    const handleLogout = () => {
        setToken("");
        window.location.reload();
    }

    if (!token) {
        return <></>
    }
    return <div className="logout">
        <span className="logout-button" onClick={handleLogout}>Logout</span>
    </div>
});
