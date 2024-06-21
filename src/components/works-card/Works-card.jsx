import "./Works-card.css"

export default function WorksCard({title,description,button}) {
    return(
           <>
            <h3 className="workcard-title">{title}</h3>
            <p className="workcard-description">{description}</p>
            <button className="workcard-button">{button}</button>
          </>
    )
}