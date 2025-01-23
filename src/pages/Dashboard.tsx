import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

function Dashboard() {
	return (
		<div className="flex bg-secondWhite h-screen">
			<Sidebar />
			<div className="flex flex-col flex-grow">
				<Header />
				<div className="flex-grow p-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
