import axios from "axios";
import {useState} from "react";
import toast, { Toaster } from 'react-hot-toast';

interface PostData {
    name: string;
    email: string;
    password: string;
}

function NewUser() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create the data object to be sent
        const postData: PostData = {
            name,
            email,
            password
        };

        try {
            // Make the POST request using Axios
            const response = await axios.post('http://localhost:8080/user/', postData);
            if (response.status === 201) {
               toast.success(response.data.message);
            }

            // Reset the form fields
            setName('')
            setEmail('')
            setPassword('')


        } catch (err) {
            // Handle any errors
            toast.error("Something went wrong." + err)
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
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" value={name}
                                           placeholder="Your FullName" onChange={(e) => setName(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" value={email}
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>


                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" className="button is-link">Submit</button>
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


export default NewUser;