import { useForm } from "react-hook-form";

type FormValues = {
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: "admin" | "client";
};

function RegisterForm() {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<div>
			<h4>Create an account</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register("userName", { required: "Username is required" })}
						placeholder="Enter your name"
					/>
					{errors?.userName && <p>{errors.userName.message}</p>}
				</div>
				<div>
					<input
						{...register("email", { required: "Email is required" })}
						placeholder="Enter your email"
					/>
					{errors?.email && <p>{errors.email.message}</p>}
				</div>
				<div>
					<input
						type="password"
						{...register("password", { required: "Password is required" })}
						placeholder="Enter your password"
					/>
					{errors?.password && <p>{errors.password.message}</p>}
				</div>
				<div>
					<input
						type="password"
						{...register("confirmPassword", {
							required: "Please confirm your password",
							validate: (value) =>
								value === getValues().password || "Passwords need to match",
						})}
						placeholder="Confirm your password"
					/>
					{errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}
				</div>

				<div>
					<div>
						<input
							type="radio"
							value="admin"
							{...register("role", { required: "Role is required" })}
							id="admin"
						/>
						<label htmlFor="admin">Admin</label>
					</div>
					<div>
						<input
							type="radio"
							value="client"
							{...register("role", { required: "Role is required" })}
							id="client"
						/>
						<label htmlFor="client">Client</label>
					</div>
					{errors?.role && <p>{errors.role.message}</p>}{" "}
				</div>

				<div>
					<button type="submit">Register</button>
				</div>
			</form>
			<div>
				<p>Already have an account?</p>
				<button>Log in</button>
			</div>
		</div>
	);
}

export default RegisterForm;
