import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ id, tags }) {
    const { relatedVideos, isLoading, isError, error } = useSelector(
        (state) => state.relatedVideos
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRelatedVideos({ tags, id }));
    }, []);

    console.log({ relatedVideos });

    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12 text-center">{error}</div>;
    }

    if (!isLoading && !isError && relatedVideos.length === 0) {
        content = <div className="col-span-12 text-center">No Content</div>;
    }

    if (!isLoading && !isError && relatedVideos.length) {
        content = relatedVideos.map((relatedVideo) => (
            <RelatedVideoListItem
                key={relatedVideo.id}
                relatedVideo={relatedVideo}
            />
        ));
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
