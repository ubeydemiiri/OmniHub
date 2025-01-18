


function Slidewrapper() {
    return (
        /* start Slidewrapper about*/
        <div className="slider-wrapper">
        <button className="arrow-btn left-arrow">&#10094;</button> 
        <div className="slider-track">
            <div className="slider-item">
                <img src="./img/Aboutus.jpg" alt="Build a School" />
                <div className="slider-content">
                    <h3>Build a School</h3>
                    <p>Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="slider-item">
            <img src="./img/Aboutus.jpg" alt="Build a School" />
                <div className="slider-content">
                    <h3>Water and Sanitation</h3>
                    <p>Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="slider-item">
            <img src="./img/Aboutus.jpg" alt="Build a School" />
                <div className="slider-content">
                    <h3>classNameroom Resources</h3>
                    <p>Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="slider-item">
            <img src="./img/Aboutus.jpg" alt="Build a School" />
                <div className="slider-content">
                    <h3>Supporting Parents</h3>
                    <p>Ut enim ad minim veniam</p>
                </div>
            </div>
        </div>
        <button className="arrow-btn right-arrow">&#10095;</button> 
    </div>
     
        /* end slide wrapper About */
    );
  };
  
  export default Slidewrapper;
  