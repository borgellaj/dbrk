import React from "react";
const Banner = () => (
  <div className="bg-grey-dark banner-sec">
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://www.daybreaker.com/wp-content/themes/dybrkr/video/dybrkr.mp4" type="video/mp4"/>
  </video>
    <div class="container h-100">
    <div class="d-flex text-center h-100">
      <div class="my-auto w-100 text-white">
        <h1 class="banner-heading">WAKE UP & DANCE</h1>
        <h2>WELLNESS | COMMUNITY | MUSIC | MISCHIEF</h2>
		<p>Join our community of 500,000+ Worldwide</p>
      </div>
    </div>
  </div>
  </div>
);
export default Banner;
