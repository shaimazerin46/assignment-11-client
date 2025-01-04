const Partner = ({ partner }) => {
    const { name, logo, description } = partner;

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="flex items-center space-x-4">
                {/* Image with fixed dimensions and round shape */}
                <img
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    src={logo}
                    alt={`${name} logo`}
                />
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            </div>
            <p className="text-gray-600 mt-4">{description}</p>
        </div>
    );
};

export default Partner;
