import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { register as registerApi } from "../services/apiAuth";

export function useRegister() {
	const navigate = useNavigate();

	const { mutate: register, isLoading } = useMutation({
		mutationFn: registerApi,
		onSuccess: () => {
			toast.success("User successfully created!");
			navigate("/login");
		},

		onError: () => {
			toast.error("Error while registering");
		},
	});

	return { register, isLoading };
}
