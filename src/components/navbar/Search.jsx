import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../features/filter/filterSlice";

export default function Search() {
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const [input, setInput] = useState(search);

    const onSearch = (e) => {
        e.preventDefault();
        dispatch(filterActions.searched(input));
    };

    return (
        <form onSubmit={onSearch}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
