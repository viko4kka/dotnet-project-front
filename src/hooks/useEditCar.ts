/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar as updateCarApi } from "../services/apiCars";
import toast from "react-hot-toast";

export function useEditCar() {
	const queryClient = useQueryClient();

	const { mutate: updateCar, isLoading } = useMutation({
		mutationFn: async (carData: {
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
		}) => {
			const result = await updateCarApi(carData);
			return result;
		},

		onSuccess: () => {
			toast.success("Car updated successfully");

			queryClient.invalidateQueries({ queryKey: ["cars"] });
		},

		onError: () => {
			toast.error("Error while updating car");
		},
	});

	return { updateCar, isLoading };
}
