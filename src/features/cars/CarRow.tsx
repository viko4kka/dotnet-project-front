import { CiImageOn } from "react-icons/ci";
import Table from "../../ui/Table";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Car {
	brand: string;
	bodyType: string;
	fuelType: string;
	pricePerDay: number;
	status: string;
	// model: "string";
	// year: 0;
	// seats: 0;
	// color: "string";
	// imageUrl: "string";
}

interface CarRowProps {
	car: Car;
}

function CarRow({ car }: CarRowProps) {
	const { brand, bodyType, fuelType, status, pricePerDay } = car;

	return (
		<Table.Row>
			<div className="flex items-center justify-center">
				<span>
					<CiImageOn />
				</span>
			</div>
			<div className=" text-center text-secondWhite/80  font-medium ">
				{brand}
			</div>
			<div className="text-center text-secondWhite/80  font-medium">
				{bodyType}
			</div>
			<div className="text-center text-secondWhite/80  font-medium">
				{fuelType}
			</div>
			<div className="text-center text-secondWhite/80  font-medium">
				{status}
			</div>
			<div className="text-center text-secondWhite/80  font-medium">
				{pricePerDay}
			</div>
			<div className="flex items-center justify-center ">
				<button className="text-center text-xl text-secondWhite/80  font-medium">
					<BsThreeDotsVertical />
				</button>
			</div>
		</Table.Row>
	);
}

export default CarRow;
