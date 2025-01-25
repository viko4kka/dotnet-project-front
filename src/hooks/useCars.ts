import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCars } from "../services/apiCars";

export function useCars() {
	// const queryClient = useQueryClient();

	const {
		data: cars = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["cars"],
		queryFn: getCars,
	});

	return { cars, isLoading, isError };
}
