import CarTable from "../features/cars/CarTable";

function Cars() {
	return (
		<>
			<div className="w-full flex flex-col justify-center items-center mt-8">
				<div className="flex flex-row items-center justify-around w-full ">
					<h2 className=" text-3xl font-bold text-secondWhite">Alll cars</h2>
					<p>CarTableOperations</p>
				</div>
				<div className="flex-1 mt-10 overflow-auto w-full px-10">
					<CarTable />
					<p>tablica</p>
				</div>
			</div>
		</>
	);
}

export default Cars;
