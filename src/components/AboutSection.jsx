
import React from 'react';
import "../../public/css/about.css"
function Experience() {
    const yearsExperience = 1;
    const completedWorks = 3;
    const companiesWorked = 2;
    return (
        <div className='experience mt-4 mb-4 py-1'>

            <div className='years-experience'>
                <span>{yearsExperience}+</span>
                <p className='experience-par'>years experience</p>
            </div>
            <div className='completed-projects'>
                <span>{completedWorks}+</span>
                <p className='experience-par'>completed works</p>
            </div>
            <div className='companies-worked'>
                <span>{companiesWorked}+</span>
           
                <p className='experience-par'>companies worked</p>
            </div>
        </div>

    )
}


function AboutSection() {


    return (
        <section id="about" className='pb-lg-5 px-4'>
            <div className="container pt-3 pt-lg-1 mt-5 ">
                <h2 className='about-h2 text-center'>About Me</h2>
                <p className='text-center'>Here you will find more information about me and what I do</p>
            </div>
            <div className='ps-3'>
                <div className= "d-flex flex-column flex-lg-row  g-5 py-lg-3 mt-lg-4 justify-content-center">

                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src="/public/avatar-kelvin.jpeg"
                            className="about-image d-block mx-lg-auto  about-image my-4"
                            alt="my photo"
                            width="400"

                            
                        />


                    </div>
                    <div className="col-lg-6 mt-3 pe-5">
                        <h1 className="display-5 fw-bold  lh-1 mb-3">
                            Kelvin Saavedra
                        </h1>
                        <p className="lead">
                            <span >
                                In my journey as a 3D artist, I've sculpted digital worlds and shaped dreams into reality, merging creativity with technology to craft immersive visual experiences.
                            </span>
                        </p>

                        <Experience />

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start ">
                            <button class="button" type="button">
                                <a href='\CV - Kelvin Enrique  Saavedra Toala (Aprile2023) 3.pdf' download="Kelvin Saavedra Cv" >
                                    <span class="button__text">Download Cv</span>
                                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                                </a>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
