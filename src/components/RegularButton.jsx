export default function RegularButton({ children, onClick, primaryColor }) {
    return (
        <button
            className={`${primaryColor} font-semibold rounded-md cursor-pointer mx-auto py-3 px-8 transition duration-150 ease-in-out shadow-sm hover:shadow-md hover:bg-opacity-70 hover:text-black md:w-1/3 md:text-lg`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}