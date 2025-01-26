const API_CAR_URL = "http://localhost:5093/api/car";

interface Car {
	carId: number;
	brand: string;
	bodyType: string;
	fuelType: string;
	pricePerDay: number;
	status: string;
	model: string; // Dodane pole
	year: number; // Dodane pole
	seats: number; // Dodane pole
	color: string; // Dodane pole
	imageUrl: string; // Dodane pole
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

interface AddCarProps {
	brand: string;
	model: string;
	year: number;
	bodyType: string;
	seats: number;
	fuelType: string;
	color: string;
	pricePerDay: number;
	status: string;
	imageUrl: string;
}

export async function addCar({
	brand,
	model,
	year,
	bodyType,
	seats,
	fuelType,
	color,
	pricePerDay,
	status,
	imageUrl,
}: AddCarProps): Promise<void> {
	const addCarOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			brand,
			model,
			year,
			bodyType,
			seats,
			fuelType,
			color,
			pricePerDay,
			status,
			imageUrl,
		}),
	};

	try {
		const response = await fetch(API_CAR_URL, addCarOptions);

		if (!response.ok) {
			throw new Error("Error while adding car");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error while adding car", error);
		throw error;
	}
}

interface UpdateCarProps {
	carId: number;
	brand: string;
	model: string;
	year: number;
	bodyType: string;
	seats: number;
	fuelType: string;
	color: string;
	pricePerDay: number;
	status: string;
	imageUrl: string;
}

export async function updateCar({
	carId,
	brand,
	model,
	year,
	bodyType,
	seats,
	fuelType,
	color,
	pricePerDay,
	status,
	imageUrl,
}: UpdateCarProps): Promise<void> {
	const updateOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			brand,
			model,
			year,
			bodyType,
			seats,
			fuelType,
			color,
			pricePerDay,
			status,
			imageUrl,
		}),
	};

	try {
		const response = await fetch(`${API_CAR_URL}/${carId}`, updateOptions);

		if (!response.ok) {
			throw new Error("Error while updating car");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error while updating car", error);
		throw error;
	}
}

export async function deleteCar(carId: number): Promise<void> {
	const deleteOptions = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(`${API_CAR_URL}/${carId}`, deleteOptions);

		if (!response.ok) {
			throw new Error("Error while deleting car");
		}
	} catch (error) {
		console.error("Error while deleting car", error);
		throw error;
	}
}

export async function getCarById(carId: number): Promise<Car> {
	const getCarByIdOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(`${API_CAR_URL}/${carId}`, getCarByIdOptions);

		if (!response.ok) {
			throw new Error("Error while fetching car by id");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error while fetching car by id", error);
		throw error;
	}
}
