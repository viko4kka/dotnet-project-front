/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateEditCarForm from "./CreateEditCarForm";
import { useDeleteCar } from "../../hooks/useDeleteCar";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser";

interface Car {
  carId: number;
  brand: string;
  model: string;
  year: number;
  bodyType: string;
  seats: number;
  fuelType: string;
  color: string;
  pricePerDay: number;
  status: string;
  imageUrl: string;
}

interface CarMenusProps {
  carId: number;
  onCloseModal?: () => void;
  xPos: number;
  yPos: number;
}

function CarMenus({
  carId,
  onCloseModal = () => {},
  xPos,
  yPos,
}: CarMenusProps) {
  const { deleteCar, isLoading: deleteLoading } = useDeleteCar();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: userData, isLoading: userLoading } = useGetUser(); // Pobranie roli użytkownika

  const car = queryClient
    .getQueryData<Car[]>(["cars"])
    ?.find((car) => car.carId === carId);

  if (!car || userLoading) return null;

  const userRole = userData?.role;

  const handleSeeDetails = () => {
    navigate(`${carId}`);
  };

  const handleDeleteCar = (carId: number) => {
    try {
      deleteCar(carId);
    } catch (error) {
      console.error("Error while deleting car in CarMenus:", error);
    }
  };

  const initialData = {
    carId: car.carId,
    brand: car.brand,
    model: car.model,
    year: car.year,
    bodyType: car.bodyType,
    seats: car.seats,
    fuelType: car.fuelType,
    color: car.color,
    pricePerDay: car.pricePerDay,
    status: car.status,
    imageUrl: car.imageUrl,
  };

  return (
    <div
      className="absolute py-1 w-28 rounded-md shadow-lg bg-white"
      style={{ top: `${yPos}px`, left: `${xPos}px` }}
    >
      {/* Opcja "See Details" dostępna dla wszystkich */}
      <button
        onClick={handleSeeDetails}
        className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center space-x-2 text-xs"
      >
        <HiEye />
        <span>See details</span>
      </button>

      {/* Opcje dodatkowe tylko dla Admin */}
      {userRole === "Admin" && (
        <>
          <button
            onClick={() => setIsOpenModal(true)}
            className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center space-x-2 text-xs"
          >
            <HiPencil />
            <span>Edit</span>
          </button>
          <button
            onClick={() => handleDeleteCar(carId)}
            disabled={deleteLoading}
            className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center space-x-2 text-xs"
          >
            {deleteLoading ? (
              <BarLoader color="#E97510" />
            ) : (
              <>
                <HiTrash />
                <span>Delete</span>
              </>
            )}
          </button>
        </>
      )}

      {/* Modal for Editing */}
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateEditCarForm
            initialData={initialData}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default CarMenus;
