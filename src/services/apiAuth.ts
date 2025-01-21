export const API_URL = "http://localhost:5093";

interface registerProps {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: "Admin" | "Client";
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

	console.log("registerOptions", registerOptions);

	try {
		const response = await fetch(
			API_URL + "/api/user/register",
			registerOptions
		);

		console.log("Status odpowiedzi:", response.status);
		console.log("Odpowiedź:", response);

		if (!response.ok) {
			throw new Error("Error while registering");
		}

		return await response.json();
	} catch (error) {
		console.error("Error while registering", error);
		throw error;
	}
}
