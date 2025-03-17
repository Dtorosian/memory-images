export default function RegularButton({ children, onClick, primaryColor }) {
    return (
        <button
            className={`${primaryColor} text-white font-semibold rounded-md cursor-pointer w-max my-0 mx-auto py-1 px-3 transition duration-150 ease-in-out hover:bg-opacity-70 hover:text-black`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}