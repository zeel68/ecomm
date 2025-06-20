const Bprops = ({ img }) => {
    return (
        <div className="flex justify-center flex-wrap items-center flex-[1_1_100px] max-w-[220px] p-2">
            <img src={img} alt="Brand" className="w-full h-auto max-w-[100px] sm:max-w-[120px]" />
        </div>
    );
};

export default Bprops;
