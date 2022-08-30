import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
    const { videos, isLoading, isError, error } = useSelector(
        (state) => state.videos
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideos());
    }, []);

    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <div className="col-span-12 text-center">{error}</div>;
    }

    if (!isLoading && !isError && videos.length === 0) {
        content = <div className="col-span-12 text-center">No Content</div>;
    }

    if (!isLoading && !isError && videos.length) {
        content = videos.map((video) => (
            <VideoGridItem key={video.id} video={video} />
        ));
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
}
