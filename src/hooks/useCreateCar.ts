import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar as addCarApi } from "../services/apiCars";
import toast from "react-hot-toast";

export function useCreateCar() {
	const queryClient = useQueryClient();

	const { mutate: addCar, isLoading } = useMutation({
		mutationFn: async (carData: {
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
		}) => addCarApi(carData),
		onSuccess: () => {
			toast.success("Car added successfully");
			queryClient.invalidateQueries({ queryKey: ["cars"] });
		},

		onError: () => {
			toast.error("Error while adding car");
		},
	});

	return { addCar, isLoading };
}
