import axios from "axios";
import {useState} from "react";

interface PostData {
    title: string;
    body: string;
}

function NewUser() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create the data object to be sent
        const postData: PostData = {
            title,
            body
        };

        try {
            // Make the POST request using Axios
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);

            // Handle the response
            setResponseMessage(`Post created with ID: ${response.data.id}`);
            setError(null);
        } catch (err) {
            // Handle any errors
            setError('Failed to create post');
            setResponseMessage('');
        }
    };

    return (
        <div>
            <h2>User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}


export default NewUser;