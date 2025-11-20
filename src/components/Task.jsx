import { FaTrash } from "react-icons/fa";
import { useId } from "react";

export default function Task({ text , onDelete }) {
  const id = useId();

  return (
    <div className="flex gap-6 items-center border px-10 py-2 mt-4 rounded">
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{text}</label>
      <FaTrash onClick={onDelete} className="ml-auto cursor-pointer text-black-500 hover:text-red-500" />
    </div>
  );
}