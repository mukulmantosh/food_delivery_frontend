import axios from "axios";
import {useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import useAuth from "../context/auth";
import {API_BASE_URL} from "../utils/urls.ts";

interface LoginData {
    email: string;
    password: string;
}


function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login } = useAuth();
    const navigate = useNavigate();


    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create the data object to be sent
        const postData: LoginData = {
            email,
            password
        };

        try {
            const response = await axios.post(API_BASE_URL + '/user/login', postData);
            if (response.status === 200) {
                const { token } = response.data;
                login(token)
                navigate('/');

            }

            // Reset the form fields
            setEmail('')
            setPassword('')


        } catch  {
            toast.error("Something went wrong!");
        }

    };

    return (
        <div>
            <Toaster />
            <div className="container">
                <div className="columns mt-6">
                    <div className="column auto"></div>
                    <div className="column is-two-fifths">
                        <form onSubmit={handleSubmit}>


                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" value={email} required={true}
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" value={password} required={true}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>


                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" className="button is-link">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="column auto"></div>
                </div>
            </div>
        </div>


    );
}


export default Login;