import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

/** import password icon */
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
    /** state for not error */
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    /** show password */
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        /** reset error */
        setRegisterError('');
        setSuccess('');

        /** password validation */
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer!!!');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters');
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and conditions')
            return;
        }

        /** create firebase user */
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');



                /** update profile */
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then( () => console.log('profile updated'))



                /** send verification email */
                sendEmailVerification(result.user)
                .then( () => {
                    alert('Please check your email and verify your account');
                })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }



    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
                <h2 className="w-3/4 text-3xl mb-8 text-center">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        className="mb-4 w-full bg-slate-100 py-2 px-4 rounded-lg"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required />
                    <br />
                    <input
                        className="mb-4 w-full bg-slate-100 py-2 px-4 rounded-lg"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email Address"
                        required />
                    <br />
                    <div className="relative">
                        <input
                            className="w-full bg-slate-100 py-2 px-4 rounded-lg"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Your Password"
                            required />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-3 right-3">
                            {
                                showPassword ? <a href="#"><IoMdEyeOff className="text-2xl" /></a> : <a href="#"><IoMdEye className="text-2xl" /></a>
                            }
                        </span>
                    </div>
                    <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms"><a>Accept our Terms and Conditions</a></label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full py-2 px-4 rounded-lg" type="submit" value="Register" />
                </form>

                {/* success message */}
                {
                    success && <p className="text-green-600">{success}</p>
                }

                {/* error message */}
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }


                {/* send to login page */}
                <p className="text-center py-5 text-orange-500">Already have an Account? Please <Link to="/login" className="btn ml-3">SIGN IN</Link> </p>
            </div>
        </div>
    );
};

export default Register;