import { useForm } from "react-hook-form";
import { useCreateCar } from "../../hooks/useCreateCar";
import { useEditCar } from "../../hooks/useEditCar";
import { useEffect } from "react";

interface CreateEditCarFormProps {
	onCloseModal?: () => void;
	initialData?: {
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
	} | null;
}

interface CarFormData {
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
}

function CreateEditCarForm({
	onCloseModal,
	initialData,
}: CreateEditCarFormProps) {
	const { addCar, isLoading: isLoadingCreate } = useCreateCar();
	const { updateCar, isLoading: isLoadingUpdate } = useEditCar();
	const { register, handleSubmit, reset, setValue } = useForm<CarFormData>();
	const isEditForm = initialData?.carId !== undefined;
	const isLoading = isLoadingUpdate || isLoadingCreate;

	function onSubmit({
		brand,
		model,
		year,
		bodyType,
		seats,
		fuelType,
		color,
		pricePerDay,
		status,
		imageUrl,
	}: {
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
	}) {
		if (isEditForm) {
			updateCar(
				{
					carId: initialData?.carId,
					brand,
					model,
					year,
					bodyType,
					seats,
					fuelType,
					color,
					pricePerDay,
					status,
					imageUrl,
				},
				{
					onSuccess: () => {
						reset();
						onCloseModal?.();
					},
				}
			);
		} else {
			addCar(
				{
					brand,
					model,
					year,
					bodyType,
					seats,
					fuelType,
					color,
					pricePerDay,
					status,
					imageUrl,
				},
				{
					onSettled: () => {
						reset();
						onCloseModal?.();
					},
				}
			);
		}
	}

	useEffect(() => {
		if (initialData) {
			setValue("brand", initialData.brand);
			setValue("model", initialData.model);
			setValue("year", initialData.year);
			setValue("bodyType", initialData.bodyType);
			setValue("seats", initialData.seats);
			setValue("fuelType", initialData.fuelType);
			setValue("color", initialData.color);
			setValue("pricePerDay", initialData.pricePerDay);
			setValue("status", initialData.status);
			setValue("imageUrl", initialData.imageUrl);
		}
	}, [initialData, setValue]);

	return (
		<div className="bg-white w-full max-w-[420px] flex flex-col justify-center items-center rounded py-8 px-12">
			<p className="text-secondBlack text-2xl font-semibold mb-6">
				{isEditForm ? "Edit car" : "Add car"}
			</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-2 gap-4 w-full">
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Brand's car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("brand", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Model's car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("model", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="number"
							placeholder="Year of car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("year", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Body type of car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("bodyType", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="number"
							placeholder="Seats in car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("seats", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Fuel type of car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("fuelType", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Color of car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("color", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="number"
							placeholder="Price per day"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("pricePerDay", {
								required: "This field is required",
							})}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Status of car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("status", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Image URL of car"
							disabled={isLoading}
							className="w-full focus:outline-none"
							{...register("imageUrl", { required: "This field is required" })}
						/>
					</div>
				</div>

				<div className="flex flex-row justify-end space-x-2 mt-6 w-full col-span-2">
					<button
						onClick={() => onCloseModal?.()}
						className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition font-medium duration-300 text-secondBlack tracking-wide">
						Cancel
					</button>
					<button
						type="submit"
						disabled={isLoading}
						className="px-3 py-1 rounded bg-bgColorButtton transition hover:bg-bgColorButttonHover font-medium duration-300 text-white tracking-wide">
						{isEditForm ? "Edit car" : "Add car"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateEditCarForm;
