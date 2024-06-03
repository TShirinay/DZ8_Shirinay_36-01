import {useRef} from 'react';

function UserPage() {
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);

    const handleClick = () => {
        const newUser = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value
        };
        console.log(newUser);
    };

    return (
        <div>
            <input type="text" placeholder="Name" ref={nameRef} />
            <input type="text" placeholder="Username" ref={usernameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <button onClick={handleClick}>Создать</button>
        </div>
    );
}

export default UserPage;

