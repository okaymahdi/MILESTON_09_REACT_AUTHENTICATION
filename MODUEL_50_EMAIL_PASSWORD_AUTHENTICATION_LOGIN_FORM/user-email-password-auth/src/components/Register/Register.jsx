const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }



    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
                <h2 className="w-3/4 text-3xl mb-8 text-center">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 bg-slate-100 py-2 px-4 rounded-lg" type="email" name="email" id="email" placeholder="Your Email Address" />
                    <br />
                    <input className="mb-4 w-3/4 bg-slate-100 py-2 px-4 rounded-lg" type="password" name="password" id="password" placeholder="Your Password" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4 py-2 px-4 rounded-lg" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;