import gallary1 from '../images/gallery1.png'
import gallary2 from '../images/gallery2.png'
import gallary3 from '../images/gallery3.png'
import gallary4 from '../images/gallery4.png'

const Gallary = () => {
    return (
        <>



            <div className="container-fluid mt-5 mb-5">
                <div className="row g-4">

                    <div className="col-12 col-md-6">
                        <img src={gallary1} alt="gallary1" className="img-fluid w-100 gallary-effect" />
                    </div>


                    <div className="col-12 col-md-3">
                        <img src={gallary2} alt="gallary2" className="img-fluid w-100 gallary-effect" />
                    </div>


                    <div className="col-12 col-md-3 d-flex flex-column gap-4">
                        <div className="row">
                            <div className="col-12">
                                <img src={gallary3} alt="gallary3" className="img-fluid w-100 gallary-effect" />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-12">
                                <img src={gallary4} alt="gallary4" className="img-fluid w-100 gallary-effect" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallary