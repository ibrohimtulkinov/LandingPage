import './OurModelsContent.css'
export default function OurModelsContent({image,title,description}) {
    return(
        <div className="d-flex gap-3"> 
          <div>
            <img src={image} alt="image" className='model-img'/>
          </div>
          <div>
            <h1 className="models-title">{title}</h1>
            <p className="models-description">{description}</p>
          </div>
        </div>
    )
}