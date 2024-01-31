import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import YouTubePlayer from './YouTubePlayer';
import Card from './Card';
import stress from '../Images/stress.png';
import heart from '../Images/breathing trouble.png'
import run from '../Images/run.png'

function Home() {
  return (
    <>
      <Navbar />
      <div className="main d-flex my-5 mx-5">
        <div className='w-50'>
          <h2>Yoga for Mind</h2>
          <p>Watch Our Lead Yoga therapist, <Link to="https://www.youtube.com/@eldahealth" style={{ textDecoration: 'none' }}>Ms Uma Subramanian</Link> explain Yoga for Mind</p>
        </div>
        <YouTubePlayer videoId="l7gka4xlKjs" />
      </div>
      <div className="box mx-5 my-5 center ">
        <h5 className='my-4 text-primary'>is this for you ?   </h5>
        <div className="d-flex justify-content-between ">
          <Card img_url={stress} desc="Hard to feel calm or sleep because of Stress" btn="Book trial for @99" className="w-100" />
          <Card img_url={heart} desc="if you have palpitations and breathing trouble" btn="I want to buy" className="w-100" />
          <Card img_url={run} desc="you have been advised by Doctors to avoid physical activity" btn="I have a question" className="w-100" />
        </div>
      </div>





    </>
  );
}

export default Home;
