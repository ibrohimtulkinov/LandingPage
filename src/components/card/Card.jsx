import "./Card.css"

export default function Card({image,title,description}) {
    return(
        <div>
          <img src={image} alt="d-clinics" className="image"/>
          <h2 className="main-card">{title}</h2>
          <p className="main-text">{description}</p>
        </div>
    )
}
 