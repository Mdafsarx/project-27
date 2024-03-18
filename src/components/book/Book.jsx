
const Book = ({singleBookMark}) => {
    return (
        <div className="p-4 bg-white rounded-xl shadow-2xl my-3">
        <h4 className="font-bold text-xl">{singleBookMark.title}</h4>
        </div>
    );
};

export default Book;