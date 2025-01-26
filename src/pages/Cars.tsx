import { useGetUser } from "../hooks/useGetUser";
import AddCar from "../features/cars/AddCar";
import CarTable from "../features/cars/CarTable";

function Cars() {
	const { data: user, isLoading, isError } = useGetUser();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError || !user) {
		return <p>Error loading user data</p>;
	}

	return (
		<div className="w-full flex flex-col justify-center items-center mt-8">
			<div className="flex flex-row items-center justify-around w-full">
				<h2 className="text-3xl font-bold text-secondWhite">All cars</h2>
			</div>
			<div className="flex-1 mt-10 overflow-auto w-full px-10">
				<CarTable />
			</div>
			{user.role === "Admin" && (
				<div className="flex flex-row items-center justify-end w-full mt-6 px-10">
					<AddCar />
				</div>
			)}
		</div>
	);
}

export default Cars;
