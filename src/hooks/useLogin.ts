import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser as loginUserApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
	const navigate = useNavigate();

	const { mutate: loginUser, isLoading } = useMutation({
		mutationFn: loginUserApi,
		onSuccess: () => {
			toast.success("User successfully logged in!");
			navigate("/dashboard");
		},

		onError: () => {
			toast.error("Error while logging in");
		},
	});

	return { loginUser, isLoading };
}
