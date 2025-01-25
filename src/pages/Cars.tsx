import AddCar from "../features/cars/AddCar";
import CarTable from "../features/cars/CarTable";

function Cars() {
	return (
		<>
			<div className="w-full flex flex-col justify-center items-center mt-8">
				<div className="flex flex-row items-center justify-around w-full ">
					<h2 className=" text-3xl font-bold text-secondWhite">Alll cars</h2>
				</div>
				<div className="flex-1 mt-10 overflow-auto w-full px-10">
					<CarTable />
				</div>
				<div className="flex flex-row items-center justify-end w-full mt-6 px-10">
					<AddCar />
				</div>
			</div>
		</>
	);
}

export default Cars;
