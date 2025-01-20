export const API_URL = "http://localhost:5093";

interface registerProps {
	userName: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: boolean;
}

export async function register({
	userName,
	email,
	password,
	confirmPassword,
	role,
}: registerProps): Promise<void> {
	try {
		const response = await fetch(API_URL + "/api/user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userName,
				email,
				password,
				confirmPassword,
				role,
			}),
		});

		if (!response.ok) {
			throw new Error("Error while registering");
		}

		const data = await response.json();
		console.log("User zarejestrowany", data);
	} catch (error) {
		console.error("Error while registering", error);
	}
}
