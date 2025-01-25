const API_CAR_URL = "http://localhost:5093/api/car";

interface Car {
	brand: string;
	bodyType: string;
	fuelType: string;
	pricePerDay: number;
	status: string;
}

export async function getCars(): Promise<Car[]> {
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
