import { useState } from 'react';
import "./Regform.css";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (name.length < 3 || name.length > 30) {
        newErrors.name = 'Name should be between 3 and 30 characters';
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
        newErrors.email = 'Email is not valid';
        }

        const passwordRegex = /^(?=.*[!@#$%^&*])/;
        if (password.length < 10 || !passwordRegex.test(password)) {
        newErrors.password = 'Password should be at least 10 characters long and contain at least one special character';
        }

        if (password !== repeatPassword) {
        newErrors.repeatPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
        console.log({ name, email, password });
        alert('Registration successful');
        }
    };

    return (
        <div className="register">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
            <label>Repeat Password</label>
            <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            {errors.repeatPassword && <p className="error">{errors.repeatPassword}</p>}
            </div>
            <button type="submit">Sign up</button>
        </form>
        </div>
    );
};

export default Register;
