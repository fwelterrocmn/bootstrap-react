function Card({ title = null, text = null, image = null, actions = null }) {
    return (
        <div className="card">
            {image && <img className="card-img-top" src={image} />}
            <div className="card-body">
                {title && <h5 className="card-title">{title}</h5>}
                {text && <p className="card-text">{text}</p>}
                {actions && <a>{actions}</a>}
            </div>
        </div>
    )
}
export default Card;