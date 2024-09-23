import React from 'react'
import Cards from '../components/card/Card'


const About = () => {
  return (
    <>
        
          <div className='container-fluid mt-5 '  id='about'>
              <h3 className='fs-1 text-center fw-bold mb-3'>New Arrival</h3>
              <div className='row gap-3 justify-content-center align-items-center'>
                <div className="col-lg-3 col-md-4">
                      <Cards image={"https://images.unsplash.com/photo-1482954363933-4bed6bbea570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                          title={"Thermo Ball Etip Gloves"}
                          price={152.6}
                          rating={4.5}
                      />
                </div>

                <div className="col-lg-3 col-md-4">
                      <Cards image={"https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                          title={"Thermo Ball Etip Gloves"}
                          price={152.6}
                          rating={4.5}
                      />
                </div>
                <div className="col-lg-3 col-md-4">
                      <Cards image={"https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                          title={"Thermo Ball Etip Gloves"}
                          price={152.6}
                          rating={4.5}
                      />
                </div>
               

              </div>
            
          </div>
    </>
  )
}

export default About