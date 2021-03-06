import React from 'react';

const Card = (props) => {
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div class="card mb-4">
        <img src={props.imgsrc} class="card-img-top" alt="blog"/>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <small className="text-muted">15/02/2121</small>
        </div>
      </div>
    </div>
  )
}

export default Card;