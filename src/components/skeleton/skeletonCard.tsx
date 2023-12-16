function SkeletonCard() {
    return (
        <div id="card-template">
            <a className="card" id="card-link" target="_blank">
                <div className="card__body">
                    <div className="card__body body__img">
                        <img className="skeleton" alt="" id="cover-img" />
                    </div>
                </div>
                <div className="card__header">
                    <h3 className="card__header header__title" id="card-title">
                        <div className="skeleton skeleton-text skeleton-text__small"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                        <div className="skeleton skeleton-text"></div>
                    </h3>
                </div>
            </a>
        </div>
    );
}

export default SkeletonCard;
