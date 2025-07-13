import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <main className="login-page">
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" required />
                </div>
                <button type="submit">Log In</button>
            </form>
        </main>
    );
};

export default LoginPage;