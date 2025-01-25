/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext } from "react";

interface TableContextProps {
	columns: string;
}

const TableContext = createContext<TableContextProps | undefined>(undefined);

interface TableProps {
	columns: string;
	children: ReactNode;
}

function Table({ columns, children }: TableProps) {
	return (
		<TableContext.Provider value={{ columns }}>
			<div
				role="table"
				className="w-full  border border-borderTableColor/70 bg-rentalSearchBarFormBackground rounded-lg overflow-hidden">
				{children}
			</div>
		</TableContext.Provider>
	);
}

interface HeaderProps {
	children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
	// const { columns } = useContext(TableContext);

	const context = useContext(TableContext);

	if (!context) return null;

	const { columns } = context;

	return (
		<div
			role="row"
			className={`text-center w-full grid px-2 py-3	 bg-rentalSearchBarFormBackground text-uppercase tracking-wider font-semibold text-secondWhite ${columns}`}>
			{children}
		</div>
	);
}

interface RowProps {
	children: React.ReactNode;
}

function Row({ children }: RowProps) {
	// const { columns } = useContext(TableContext);
	const context = useContext(TableContext);

	if (!context) return null;

	const { columns } = context;

	return (
		<div
			role="row"
			className={`grid w-full  text-center py-4 px-2 border-y border-borderTableColor/70 last:border-b-0 ${columns}`}>
			{children}
		</div>
	);
}

interface BodyProps {
	data: any[];
	render: (item: any, index: number) => React.ReactNode;
}

function Body({ data, render }: BodyProps) {
	if (!data || !data.length) return <div>No data to show at the moment</div>;

	return (
		<div className="w-full bg-backgroundColor/50">
			{data.map((item, index) => (
				<section className="my-1" key={index}>
					{render(item, index)}
				</section>
			))}
		</div>
	);
}

function Footer() {
	return (
		<div className="w-full h-10 bg-secondWhite">fotter</div>
	);
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
