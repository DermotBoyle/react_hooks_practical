import React, {useState} from 'react'


export default function Login (){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [user, setUser] = useState(null);

const handleLogin = event => {
    event.preventDefault();
    const userData = {
        username,
        password
    }
    setUser(userData);
    setUsername('');
    setPassword('');
}


return (
    <div className="hello"
    
    style={{textAlign : 'center'}} >
        
        <h2 className="title">Login Form</h2>

        <form style={{  display : 'grid',
                        alignItems: 'center',
                        justifyItems: 'center'  
                    }}
                        onSubmit={handleLogin}>

            <input  type="text"
                    placeholder="username"
                    onChange={event => setUsername(event.target.value)}/>
            <input  type="password"
                     placeholder="password"
                     onChange={event => setPassword(event.target.value)}/>
            <button type="submit">Submit</button>
        </form>

        {user && JSON.stringify(user, null, 2)}

 
    </div>
)
}