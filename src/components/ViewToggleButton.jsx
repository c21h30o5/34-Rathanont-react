export default function ViewToggleButton( {onClick, children}) {
    return (
        <button
            onClick={onClick}
            className="bg-white font-semibold py-5 px-6 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 transition text-gray-800"
        >
            {children}
        </button>

    )
};