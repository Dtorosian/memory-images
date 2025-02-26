export default function RegularButton({ children, handleClick }) {
    return (
        <button
            className="bg-slate-900 text-gray-300 font-semibold border-2 border-slate-900 rounded-md cursor-pointer w-max my-0 mx-auto py-1 px-3"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}