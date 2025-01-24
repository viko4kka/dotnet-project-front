import { Outlet, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import { useGetUser } from "../hooks/useGetUser";
import { BarLoader } from "react-spinners";

function Dashboard() {
	const { data, isError, isLoading } = useGetUser();

	const navigate = useNavigate();

	if (isError) {
		navigate("/login");

		return null;
	}

	return (
		<div className="flex bg-secondWhite h-screen">
			{isLoading ? (
				<div className="flex items-center justify-center w-full h-full">
					<BarLoader color="#E97510" />
				</div>
			) : (
				<>
					<Sidebar data={data} />
					<div className="flex flex-col flex-grow">
						<Header />
						<div className="flex-grow p-4">
							<Outlet />
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Dashboard;
