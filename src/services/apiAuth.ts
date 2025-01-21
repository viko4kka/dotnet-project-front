export const API_URL = "http://localhost:5093";

interface registerProps {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: "Admin" | "Client";
}

interface loginProps {
	email: string;
	password: string;
}

export async function registerUser({
	username,
	email,
	password,
	confirmPassword,
	role,
}: registerProps): Promise<void> {
	const registerOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
			confirmPassword,
			role,
		}),
	};

	try {
		const response = await fetch(
			API_URL + "/api/user/register",
			registerOptions
		);

		if (!response.ok) {
			throw new Error("Error while registering");
		}

		return await response.json();
	} catch (error) {
		console.error("Error while registering", error);
		throw error;
	}
}

export async function loginUser({
	email,
	password,
}: loginProps): Promise<void> {
	const loginOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	};

	try {
		const response = await fetch(API_URL + "/api/user/login", loginOptions);

		if (!response.ok) {
			throw new Error("Error while logging in");
		}

		return await response.json();
	} catch (error) {
		console.error("Error while logging in", error);
		throw error;
	}
}
