/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCar as deleteCarApi } from "../services/apiCars";

export function useDeleteCar() {
	const queryClient = useQueryClient();

	const { mutate: deleteCar, isLoading } = useMutation({
		mutationFn: async (carId: number) => deleteCarApi(carId),
		onSuccess: () => {
			toast.success("Car deleted successfully");
			queryClient.invalidateQueries({ queryKey: ["cars"] });
		},
		onError: () => {
			toast.error("Error deleting car");
			
		},
	});

	return { deleteCar, isLoading };
}
