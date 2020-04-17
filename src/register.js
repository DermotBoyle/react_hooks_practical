import React, {useState} from 'react';


const initialForm = {
    username : '',
    email: '',
    password: ''    
}

export default function Register (){

const [form, setForm] = useState(initialForm)
const [user, setUser] = useState(null);


const handleChange = event => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
}

const handleSubmit= event => {
    event.preventDefault();
    setUser(form);
    setForm(initialForm);
}


return (
    <div className="hello"
    
        style={{textAlign : 'center'}}>
        
            <h2 className="title">Register</h2>

        <form style={{  display : 'grid',
                        alignItems: 'center',
                        justifyItems: 'center'  
                    }}
                onSubmit={handleSubmit}>

            <input  type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                    />
            <input  type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}/>
            <input  type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                     />
            <button  style={{marginTop : '1%'}}
            type="submit">Submit</button>

        </form>
        {user && JSON.stringify(user, null, 3)}
    </div>
)

}