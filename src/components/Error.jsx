const Error = ({children}) => {
    return (
        <p className="bg-red-600 text-white font-bold text-center p-2 mt-5 rounded-md absolute w-fit left-0 right-0 mx-auto">
            {children}
        </p>
    );
}

export default Error;