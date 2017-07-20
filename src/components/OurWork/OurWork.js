import React from 'react';
import './OurWork.css';

const OurWork = (props) => {
  return(
    <div className="row our-work">
      <h1 className="title">how we work</h1>
      <div className="col-md-7">
        <p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores autem culpa cum cumque deleniti ea eligendi, impedit inventore iusto maxime nam nobis nostrum pariatur placeat quisquam ratione ut, vel?</span>
          <span>Ad amet aperiam architecto autem consectetur deserunt eligendi est expedita fugiat fugit incidunt iure laudantium maiores nulla quaerat quasi ut, vitae! Distinctio eaque enim, laborum nihil perferendis quae similique soluta!</span>
          <br/>
          <br/>
          <span>Assumenda, provident, tenetur? Accusantium asperiores aut esse fugiat iste, numquam officia possimus quaerat similique vel? Aliquid, quidem ratione. Cum, cumque debitis eligendi facilis iure maxime officia praesentium quod ratione ut.</span>
          <br/>
          <br/>
          <span>Atque quae quam repellendus vel velit. Animi dolorem ea eveniet ex, magnam maxime nihil provident quam quia quidem sint totam vitae voluptas! Enim facilis ipsam numquam officiis reprehenderit sed, unde.</span>
          <span>Ab animi consectetur deleniti dicta distinctio dolore ea eos et excepturi facilis fuga impedit incidunt inventore ipsam iure, iusto magni modi nam nemo quas quia ratione sint soluta suscipit vero.</span>
        </p>
      </div>
      <div className="col-md-5">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/acuhmtI_bj8"
        >
        </iframe>
      </div>
    </div>
  );
};

export default OurWork;