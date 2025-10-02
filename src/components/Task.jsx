import { FaTrash } from "react-icons/fa";
import { useId } from "react";

export default function Task( {taskdata} ) {
    const uniqueid = useId();
    return (
        <>
        <div className="flex gap-6 items-center border px-10 py-2 mt-4 rounded">
                <input id={uniqueid} type="checkbox"  />
                <label htmlFor={uniqueid}>{taskdata}</label>
                <FaTrash />
            </div>
        </>
    )
}