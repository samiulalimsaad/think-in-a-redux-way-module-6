import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../features/filter/filterSlice";

export default function Tag({ tag }) {
    const { tags } = useSelector((state) => state.filter);

    const dispatch = useDispatch();

    const isSelected = tags.includes(tag.title);

    const handleTagSelect = () => {
        isSelected
            ? dispatch(filterActions.tagRemoved(tag.title))
            : dispatch(filterActions.tagSelected(tag.title));
    };

    const style = isSelected
        ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
        : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

    return (
        <div className={style} onClick={handleTagSelect}>
            {tag.title}
        </div>
    );
}
