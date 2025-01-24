const API_CAR_URL = "http://localhost:5093/api/car";

export async function getCars() {
	try {
		const response = await fetch(API_CAR_URL);

		if (!response.ok) {
			throw new Error("Error while fetching cars");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error while fetching cars", error);
		throw error;
	}
}
