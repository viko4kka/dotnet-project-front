import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateEditCarForm from "./CreateEditCarForm";

function AddCar() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleShowForm = () => {
		setIsOpenModal(!isOpenModal);
	};

	return (
		<div className="flex flex-row space-x-2 justify-end mt-2 px-4">
			<button
				onClick={handleShowForm}
				className="px-3 py-1 rounded bg-bgColorButtton duration-300 transition hover:bg-bgColorButttonHover font-medium  text-secondWhite tracking-wide">
				Add car
			</button>
			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateEditCarForm
						onCloseModal={() => setIsOpenModal(false)}
						initialData={null}
					/>
				</Modal>
			)}
		</div>
	);
}

export default AddCar;
