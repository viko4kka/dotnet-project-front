import { useQuery } from "@tanstack/react-query";
import { getCars } from "../services/apiCars";

export function useCars() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["cars"],
		queryFn: getCars,
	});

	return { data, isLoading, isError };
}
