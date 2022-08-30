import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
    const { tags, isLoading, isError, error } = useSelector(
        (state) => state.tags
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTags());
    }, []);

    if (!isLoading && !isError && tags.length === 0) {
        return null;
    }

    if (!isLoading && !isError && tags.length)
        return (
            <section>
                <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                    {tags.map((tag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </div>
            </section>
        );
}
