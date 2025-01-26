import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { loginUser, isLoading } = useLogin();

	function onSubmit() {
		loginUser({ email, password });
	}

	const handleToRegister = () => {
		navigate("/register");
	};

	return (
		<div className="flex flex-col justify-center items-center w-full max-w-[400px] rounded-sm  py-6 px-12 ">
			<h1 className="text-4xl font-bold mb-8 text-secondWhite ">Log in</h1>
			<div className="flex flex-col gap-2 w-full">
				<div className="w-full">
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						disabled={isLoading}
						className="w-full  text-secondWhite bg-inputBgColor placeholder-secondWhite/40 p-3 rounded-sm outline-none"
					/>
				</div>
				<div className="w-full">
					<input
						type="password"
						value={password} //to sie nazywa controlled input
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
						disabled={isLoading}
						className="w-full  text-secondWhite bg-inputBgColor placeholder-secondWhite/40 p-3 rounded-sm outline-none"
					/>
				</div>
			</div>

			<div className="w-full bg-bgColorButtton duration-300 transition hover:bg-bgColorButttonHover felx flex-col justify-center items-center rounded-sm mt-8 text-center">
				<button
					onClick={onSubmit}
					className="w-full text-lg tracking-wide text-secondWhite font-semibold  py-1.5 px-3">
					Log in
				</button>
			</div>

			<div className="flex flex-col  space-y-2 items-center justify-center mt-4">
				<p className="text-secondWhite/75">Don't have an account?</p>
				<button
					onClick={handleToRegister}
					className="font-medium duration-300 transition	 text-secondWhite hover:text-bgColorButttonHover">
					Create an account
				</button>
			</div>
		</div>
	);
}

export default LoginForm;
