import Title from './Title'
import { servicesLink } from '../data';

const Services = () => {
  return (
      <section className="section services" id="services">
      <Title title='our' subTitle='services' />
      <div className="section-center services-center">
      {servicesLink.map((link) => {
        const {id, iconName, titleName, textName } = link
        return(
        <article className="service" key={id}>
          <span className="service-icon"><i className={iconName}></i></span>
          <div className="service-info">
            <h4 className="service-title">{titleName}</h4>
            <p className="service-text">
              {textName}
            </p>
          </div>
        </article>
        )
      })}
      </div>
    </section>
  )
}

export default Services