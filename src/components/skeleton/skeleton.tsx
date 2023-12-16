import SkeletonCard from "./skeletonCard";
import "./skeleton.scss";

function Skeleton() {
    const skeletonArray = Array.from({ length: 8 }, (value, i) => (
        <SkeletonCard key={i} />
    ));
    return (
        <div className="skeleton_container">
            {skeletonArray.map((skeleton) => skeleton)}
        </div>
    );
}

export default Skeleton;
