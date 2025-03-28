export default function RegularButton({ children, onClick, primaryColor }) {
    return (
        <button
            className={`${primaryColor} text-white font-semibold rounded-md cursor-pointer border mx-auto py-2 px-5 transition duration-150 ease-in-out hover:bg-opacity-70 hover:text-black`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}