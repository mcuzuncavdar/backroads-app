import Title from './Title'
import { toursLink } from '../data';

const Tours = () => {
  return(
       <section className="section" id="tours">
       <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">
      {toursLink.map((link=> {
        const {id, imageName, date, title, text, country, day, price} = link
        return(
        <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={imageName}className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {country}
              </p>
              <p>{day} days</p>
              <p>from ${price}</p>
            </div>
          </div>
        </article>
          );
        }))}
      </div>
    </section>
  )
}

export default Tours;