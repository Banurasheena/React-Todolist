import React, { Component } from "react";
import image1 from './images/blu.jpeg'
import image2 from './images/blouse.jpeg'
import image3 from './images/woman.jpeg'

class Silder extends Component {
  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
                    <img className="carousel-image" src={image1} alt="image3"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Laces and Buttons.</h1>
                <p>
                  Fashion is the armor to survive the reality of everyday life... Fashion is like eating, you shouldn't stick to the same menu..

                  "THE JOY OF DRESSING IS AN ART..."
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img className="carousel-image"  src={image3} alt="image3"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>ELEGANCE IS ELIMINATION.</h1>
                <p>
                Girls do not dress for boys. They dress for themselves, and of course, each other. If girls dressed for boys, they’d just walk around naked at all times.

                "People will stare. Make it worth their while."
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="carousel-image"  src={image2}alt="image3"/>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>FASHIONS FADE.STYLE IS ETERNAL.</h1>
                <p>
                You gotta have style. It helps you get down the stairs. It helps you get up in the morning. It’s a way of life. Without it, you’re nobody. I’m not talking about lots of clothes.

                "I like my money right where I can see it…hanging in my closet." 
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                     Gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Silder;
