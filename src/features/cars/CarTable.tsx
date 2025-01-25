import { useCars } from "../../hooks/useCars";
import Table from "../../ui/Table";
import CarRow from "./CarRow";

function CarTable() {
	const { cars, isLoading, isError } = useCars();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error while fetching cars</div>;
	}

	return (
		<Table columns="grid-cols-[1fr_2fr_2fr_2fr_2fr_2fr_1fr]">
			<Table.Header>
				<div></div>
				<div className="text-lg text-secondWhite uppercase tracking-wide font-semibold">
					Name
				</div>
				<div className="text-lg text-secondWhite uppercase tracking-wide font-semibold">
					Type
				</div>
				<div className="text-lg text-secondWhite uppercase tracking-wide font-semibold">
					Fuel
				</div>
				<div className="text-lg text-secondWhite uppercase tracking-wide font-semibold">
					Status
				</div>
				<div className="text-lg text-secondWhite uppercase tracking-wide font-semibold">
					Price
				</div>
				<div></div>
			</Table.Header>
			<Table.Body
				data={cars}
				render={(car) => <CarRow key={car.id} car={car} />}
			/>

			<Table.Footer />
		</Table>
	);
}

export default CarTable;
