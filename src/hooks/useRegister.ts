import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registerUser as registerUserApi } from "../services/apiAuth";

export function useRegister() {
	const navigate = useNavigate();

	const { mutate: registerUser, isLoading } = useMutation({
		mutationFn: registerUserApi,
		onSuccess: () => {
			toast.success("User successfully created!");
			navigate("/login");
		},

		onError: () => {
			toast.error("Error while registering");
		},
	});

	return { registerUser, isLoading };
}
