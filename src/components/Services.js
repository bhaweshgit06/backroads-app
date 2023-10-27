import React from 'react'
import Title from './title';
import { ServicesList } from './data';

function Services() {
    return (
      <section className="section services" id="services">
       <Title title="Our " subtitle="Services"/>
        <div className="section-center services-center">
          {ServicesList.map(({id, title, text, icon})=>{
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">
                   {text}
                  </p>
                </div>
              </article>
            );
          })
          }
        </div>
      </section>
    );
}

export default Services
