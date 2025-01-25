import { CiImageOn } from "react-icons/ci";
import Table from "../../ui/Table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import CarMenus from "./CarMenus";

interface Car {
	carId: number;
	brand: string;
	bodyType: string;
	fuelType: string;
	pricePerDay: number;
	status: string;
}

interface CarRowProps {
	car: Car;
	onCloseModal: () => void;
}

function CarRow({ car, onCloseModal }: CarRowProps) {
	const { carId, brand, bodyType, fuelType, status, pricePerDay } = car;
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

	const toggleMenus = (e: React.MouseEvent) => {
		const { clientX, clientY } = e;
		setMenuPosition({ x: clientX, y: clientY });
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Table.Row>
			<div className="flex items-center justify-center">
				<span>
					<CiImageOn />
				</span>
			</div>
			<div className="text-center text-secondWhite/80 font-medium">{brand}</div>
			<div className="text-center text-secondWhite/80 font-medium">
				{bodyType}
			</div>
			<div className="text-center text-secondWhite/80 font-medium">
				{fuelType}
			</div>
			<div className="text-center text-secondWhite/80 font-medium">
				{status}
			</div>
			<div className="text-center text-secondWhite/80 font-medium">
				{pricePerDay}
			</div>
			<div className="flex items-center justify-center ">
				<button
					onClick={toggleMenus}
					className="text-center text-xl text-secondWhite/80 font-medium">
					<BsThreeDotsVertical />
				</button>
				{isMenuOpen && (
					<CarMenus
						carId={carId}
						onCloseModal={onCloseModal}
						xPos={menuPosition.x}
						yPos={menuPosition.y}
					/>
				)}
			</div>
		</Table.Row>
	);
}

export default CarRow;
