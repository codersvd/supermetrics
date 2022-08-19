import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {Posts} from "./pages/posts/Posts";
import {HeaderLinks} from "./layouts/HeaderLinks";
import useToken from "./hooks/useToken";

function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className="App">
            <HeaderLinks/>
            <Routes>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>
        </div>
    );
}

export default App;
