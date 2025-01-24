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

interface userResponse {
	id: string;
	username: string;
	email: string;
	role: string;
	token: string;
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

export async function getUser(): Promise<userResponse> {
	const token = localStorage.getItem("token");
	if (!token) {
		throw new Error("Token not found");
	}

	const getUserOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		withCredentials: true,
	};

	try {
		const response = await fetch(API_URL + "/api/user/me", getUserOptions);

		if (!response.ok) {
			throw new Error("Error while getting user");
		}

		return await response.json();
	} catch (error) {
		console.error("Error while getting user", error);
		throw error;
	}
}
