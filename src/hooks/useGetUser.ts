import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiAuth";

export function useGetUser() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["user"],
		queryFn: getUser,
	});

	return { data, isLoading, isError };
}
