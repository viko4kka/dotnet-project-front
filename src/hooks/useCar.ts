import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../services/apiCars";

export function useCar(carId: number | undefined) {
	const {
		data: car,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["car", carId],
		queryFn: () => {
			if (!carId) throw new Error("Car id is required");
			return getCarById(carId);  // Typowanie odpowiedzi na Car
		},
		enabled: !!carId,
	});

	return { car, isLoading, isError };
}