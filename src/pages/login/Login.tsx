import React, {FormEvent, useRef} from "react";
import "./style/index.scss";
import {useNavigate} from "react-router-dom";
import {urlApi} from "../../data/constans";

async function loginUser(credentials: { name: string, email: string }) {
    return fetch(urlApi + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...credentials, "client_id": "ju16a6m81mhid5ue1z3v2g0uh"})
    }).then(data => data.json())
}


export function Login(props: { setToken: any }) {
    const name = useRef<any>(null);
    const email = useRef<any>(null);

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data: { name: string, email: string } = {
            name: name?.current.value,
            email: email?.current.value
        };

        if (data) {
            const tokenFromUrl = await loginUser({
                name: data.name,
                email: data.email
            });
            props.setToken(tokenFromUrl.data.sl_token);
            navigate("/posts");
        }
    }

    return (
        <div id="login-page">
            <div className="wrap-login-form">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={name} name="name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={email} name="email"/>
                    </div>
                    <button className="login-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

