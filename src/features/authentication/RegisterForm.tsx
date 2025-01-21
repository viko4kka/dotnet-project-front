	import { useForm } from "react-hook-form";
	import { useNavigate } from "react-router-dom";
	import { useRegister } from "../../hooks/useRegister";

	type FormValues = {
		username: string;
		email: string;
		password: string;
		confirmPassword: string;
		role: "Admin" | "Client";
	};

	function RegisterForm() {
		const navigate = useNavigate();
		const {
			register,
			handleSubmit,
			getValues,
			reset,
			formState: { errors },
		} = useForm<FormValues>();
		const { registerUser, isLoading } = useRegister();

		const onSubmit = (data: FormValues) => {
			registerUser(data, {
				onSettled: () => {
					reset();
				},
			});
		};

		const handleToLogin = () => {
			navigate("/login");
		};
		return (
			<div className="flex flex-col justify-center items-center w-full max-w-[400px] rounded-sm  py-6 px-12 ">
				<h4 className="text-4xl font-bold mb-8 text-secondWhite ">
					Create an account
				</h4>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-2 w-full">
					<div className="w-full">
						<input
							{...register("username", { required: "Username is required" })}
							placeholder="Enter your name"
							disabled={isLoading}
							className="w-full  text-secondWhite bg-inputBgColor placeholder-secondWhite/40 p-3 rounded-sm outline-none"
						/>
						{errors?.username && (
							<p className="text-red-500">{errors.username.message}</p>
						)}
					</div>
					<div className="w-full">
						<input
							{...register("email", { required: "Email is required" })}
							placeholder="Enter your email"
							disabled={isLoading}
							className="w-full  text-secondWhite bg-inputBgColor placeholder-secondWhite/40 p-3 rounded-sm outline-none"
						/>
						{errors?.email && (
							<p className="text-red-500">{errors.email.message}</p>
						)}
					</div>
					<div className="w-full">
						<input
							type="password"
							disabled={isLoading}
							{...register("password", { required: "Password is required" })}
							placeholder="Enter your password"
							className="w-full  text-secondWhite bg-inputBgColor placeholder-secondWhite/40 p-3 rounded-sm outline-none"
						/>
						{errors?.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>
					<div className="w-full">
						<input
							type="password"
							{...register("confirmPassword", {
								required: "Please confirm your password",
								validate: (value) =>
									value === getValues().password || "Passwords need to match",
							})}
							placeholder="Confirm your password"
							disabled={isLoading}
							className="w-full  text-secondWhite bg-inputBgColor placeholder-secondWhite/40 p-3 rounded-sm outline-none"
						/>
						{errors?.confirmPassword && (
							<p className="text-red-500">{errors.confirmPassword.message}</p>
						)}
					</div>

					<div className="flex flex-row gap-4 items-center justify-center mt-4">
						<div className="flex flex-row gap-1 items-center">
							<input
								type="radio"
								value="Admin"
								disabled={isLoading}
								{...register("role", { required: "Role is required" })}
								id="admin"
							/>
							<label htmlFor="admin" className="text-secondWhite">
								Admin
							</label>
						</div>
						<div className="flex flex-row gap-1 items-center">
							<input
								type="radio"
								value="Client"
								disabled={isLoading}
								{...register("role", { required: "Role is required" })}
								id="client"
							/>
							<label htmlFor="client" className="text-secondWhite">
								Client
							</label>
						</div>
						{errors?.role && (
							<p className="text-red-500">{errors.role.message}</p>
						)}{" "}
					</div>

					<div className="w-full bg-bgColorButtton duration-300 transition hover:bg-bgColorButttonHover felx flex-col justify-center items-center rounded-sm mt-4 text-center">
						<button
							type="submit"
							disabled={isLoading}
							className="w-full text-lg tracking-wide text-secondWhite font-semibold  py-1.5 px-3">
							Register
						</button>
					</div>
				</form>
				<div className="flex flex-row space-x-2 items-center justify-center mt-4">
					<p className="text-secondWhite">Already have an account?</p>
					<button
						onClick={handleToLogin}
						className="font-medium duration-300 transition	 text-secondWhite hover:text-bgColorButttonHover">
						Log in
					</button>
				</div>
			</div>
		);
	}

	export default RegisterForm;
