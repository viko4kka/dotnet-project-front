import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Cars from "./pages/Cars";
import Reservations from "./pages/Reservations";
import Settings from "./pages/Settings";

//create a client
const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<PageNotFound />} />

						<Route path="dashboard" element={<Dashboard />}>
							<Route path="cars" element={<Cars />} />
							<Route path="reservations" element={<Reservations />} />
							<Route path="settings" element={<Settings />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 3000,
						},
						style: {
							zIndex: 1000,
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
						},
						className: "bg-white text-black",
					}}
				/>
			</QueryClientProvider>
		</>
	);
}

export default App;
