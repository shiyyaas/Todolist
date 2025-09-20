import { FaTrash } from "react-icons/fa";

export default function Task() {
    return (
        <>
            <div className="flex gap-6 items-center border px-10 py-2 mt-4 rounded">
                <input id="check?" type="checkbox"  />
                <label for="check?">Workout</label>
                <FaTrash />
            </div>
        </>
    )
}