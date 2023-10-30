import React, { useCallback, useState } from "react";
import "../assets/css/Auth.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// const [signInForm, setsignInForm] = useState({
//     email: "",
//     pwd: ""
// });
// setsignInForm((prev) => ({...prev, email: e.target.value}))

const Auth = ({ users, setCurrentUser }) => {
	// Manage inputs values
	const [emailIn, setEmailIn] = useState("");
	const [emailUp, setEmailUp] = useState("");
	const [pwdIn, setPwdIn] = useState("");
	const [pwdUp, setPwdUp] = useState("");
	const [nameUp, setNameUp] = useState("");

	const navigate = useNavigate();
	// To navigate between routes

	// We want this function to be cached only on some states change
	const handleSignIn = useCallback(
		(e) => {
			e.preventDefault();
			// To prevent the browser from sending a request to the server

			console.log(emailIn, pwdIn);
			const email = emailIn.trim().toLowerCase(); // Normalize email

			const findEmail = users.find((user) => user.email === email); // undefined | {}
			// Search for the user by email

			// No user with that email
			if (!findEmail) {
				toast.error("Email not found");
				return;
			}

			// User found -- Password doesn't match
			if (findEmail.pwd !== pwdIn) {
				toast.error("Incorrect password");
				return;
			}

			// USER LOGGED IN
			// Let the app know that the user logged in
			setCurrentUser({
				isConnected: true,
				data: findEmail, // req.user
			});

			toast.success("Logged in successfuly");

			// Navigate to the Route "/home"
			navigate("/home");
		},
		[emailIn, pwdIn, users]
	);

	return (
		<>
			<div className="container" id="container">
				<div className="form-container sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						<span>or use your email for registration</span>
						<input
							value={nameUp}
							onChange={({ target }) => setNameUp(target.value)}
							type="text"
							placeholder="Name"
						/>
						<input
							value={emailUp}
							onChange={({ target }) => setEmailUp(target.value)}
							type="email"
							placeholder="Email"
						/>
						<input
							value={pwdUp}
							onChange={({ target }) => setPwdUp(target.value)}
							type="password"
							placeholder="Password"
						/>
						<button type="submit">Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form onSubmit={handleSignIn} action="https://www.facebook.com">
						<h1>Sign in</h1>
						<span>or use your account</span>
						<input
							onChange={({ target }) => setEmailIn(target.value)}
							value={emailIn}
							type="email"
							placeholder="Email"
						/>
						<input
							onChange={({ target }) => setPwdIn(target.value)}
							value={pwdIn}
							type="password"
							placeholder="Password"
						/>
						<a href="#">Forgot your password?</a>
						<button type="submit">Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>
								To keep connected with us please login with your personal info
							</p>
							<button
								onClick={() => {
									const container = document.getElementById("container");

									container.classList.remove("right-panel-active");
								}}
								className="ghost"
								id="signIn"
							>
								Sign In
							</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button
								onClick={() => {
									const container = document.getElementById("container");

									container.classList.add("right-panel-active");
								}}
								className="ghost"
								id="signUp"
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
