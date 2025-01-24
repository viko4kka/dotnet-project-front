import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";

function Sidebar({ data }) {
	console.log(data);

	return (
		<div className="bg-mainBgColor shadow-xl w-[330px] flex flex-col items-center justify-between h-screen">
			<div className="h-screen flex flex-col items-center justify-between py-16 px-12 w-full">
				<div className="flex flex-col items-start gap-y-3 w-full">
					<button className="group w-full">
						<NavLink
							to="/dashboard/cars"
							className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-bgColorButttonHover/30 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondWhite  transition-all duration-300 ">
								<IoCarSportOutline />
							</span>
							<p className="text-2xl rounded text-secondWhite group-hover:text-mainColor transition-all duration-300">
								Cars
							</p>
						</NavLink>
					</button>
					{data?.role === "Admin" ? (
						<button className="group w-full">
							<NavLink
								to="/dashboard/reservations"
								className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-bgColorButttonHover/30 w-full transition-all duration-300">
								<span className="text-2xl px-3 text-secondWhite transition-all duration-300">
									<HiOutlineCalendarDays />
								</span>
								<p className="text-2xl rounded text-secondWhite transition-all duration-300">
									Reservations
								</p>
							</NavLink>
						</button>
					) : (
						<button className="group w-full">
							<NavLink
								to="/dashboard/my-reservations"
								className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-bgColorButttonHover/30 w-full transition-all duration-300">
								<span className="text-2xl px-3 text-secondWhite transition-all duration-300">
									<HiOutlineCalendarDays />
								</span>
								<p className="text-2xl rounded text-secondWhite transition-all duration-300">
									My Reservations
								</p>
							</NavLink>
						</button>
					)}
					<button className="group w-full">
						<NavLink
							to="/dashboard/settings"
							className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-bgColorButttonHover/30 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondWhite  transition-all duration-300 ">
								<IoSettingsOutline />
							</span>
							<p className="text-2xl rounded text-secondWhite  transition-all duration-300">
								Settings
							</p>
						</NavLink>
					</button>
				</div>
				<div className="group w-full">
					<button className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-buttonLogOut/70 w-full transition-all duration-300">
						{" "}
						<span className="text-2xl px-3 text-secondBlack group-hover:text-white transition-all duration-300">
							<IoLogOutOutline />
						</span>{" "}
						<p className="text-2xl rounded text-secondBlack group-hover:text-white transition-all duration-300">
							Log out
						</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
