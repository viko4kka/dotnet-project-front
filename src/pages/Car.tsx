import { useNavigate, useParams } from "react-router-dom";
import { useCar } from "../hooks/useCar";

function Car() {
	const navigate = useNavigate();
	const { carId } = useParams<{ carId: string }>();

	const parsedCarId = carId ? Number(carId) : undefined;
	const { car, isLoading, isError } = useCar(parsedCarId);

	if (!parsedCarId) {
		return <div>Invalid car ID</div>;
	}

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading car details</div>;

	if (!car) {
		return <div>No car found</div>;
	}

	return (
		<div className="p-4 border rounded-md mt-6">
			<h1 className="text-2xl font-bold mb-4 text-secondWhite">
				{car.brand} - Details
			</h1>
			<p className="border border-secondWhite bg-green-700 mb-4  p-2 rounded text-secondWhite">
				<span className="font-medium text-spanColor">Status:</span> {car.status}
			</p>
			<div className="grid grid-cols-2 gap-2">
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Model:</span> {car.model}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Year:</span> {car.year}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Body Type:</span>{" "}
					{car.bodyType}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Fuel Type:</span>{" "}
					{car.fuelType}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Price per Day:</span> $
					{car.pricePerDay}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Seats:</span> {car.seats}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Color:</span> {car.color}
				</p>
				<p className="p-2 rounded text-secondWhite">
					<span className="font-medium text-spanColor">Img:</span>{" "}
					{car.imageUrl}
				</p>
			</div>
			{/* <img src={car.imageUrl} alt={car.model} className="mt-4" /> */}
			<div className="flex flex-row space-x-2 justify-end mt-2 px-4">
				<button
					className="px-3 py-1 rounded bg-bgColorButtton duration-300 transition hover:bg-bgColorButttonHover font-medium text-secondWhite tracking-wide"
					onClick={() => navigate(-1)}>
					Back to List
				</button>
			</div>
		</div>
	);
}

export default Car;
