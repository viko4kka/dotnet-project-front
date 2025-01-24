// import { createContext, useContext } from "react";

// const TableContext = createContext();

// function Table({ columns, children }) {
// 	return (
// 		<TableContext.Provider value={{ columns }}>
// 			<div
// 				role="table"
// 				className="w-full  border border-borderTableColor/70 bg-rentalSearchBarFormBackground rounded-lg overflow-hidden">
// 				{children}
// 			</div>
// 		</TableContext.Provider>
// 	);
// }

// function Header({ children }) {
// 	const { columns } = useContext(TableContext);

// 	return (
// 		<div
// 			role="row"
// 			className={`text-center w-full grid px-2 py-3	 bg-rentalSearchBarFormBackground text-uppercase tracking-wider font-semibold text-secondWhite ${columns}`}>
// 			{children}
// 		</div>
// 	);
// }

// function Row({ children }) {
// 	const { columns } = useContext(TableContext);

// 	return (
// 		<div
// 			role="row"
// 			className={`grid w-full  text-center py-4 px-2 border-y border-borderTableColor/70 last:border-b-0 ${columns}`}>
// 			{children}
// 		</div>
// 	);
// }

// function Body({ data, render }) {
// 	if (!data || !data.length) return <div>No data to show at the moment</div>;

// 	return (
// 		<div className="w-full bg-backgroundColor/50">
// 			{data.map((item, index) => (
// 				<section className="my-1" key={index}>
// 					{render(item, index)}
// 				</section>
// 			))}
// 		</div>
// 	);
// }

// function Footer({ children }) {
// 	return (
// 		<div className="w-full h-10 bg-rentalSearchBarFormBackground">
// 			{children}
// 		</div>
// 	);
// }

// Table.Header = Header;
// Table.Row = Row;
// Table.Body = Body;
// Table.Footer = Footer;

// export default Table;
