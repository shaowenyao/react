import React from 'react';

const Mobile_homepage_content = (
    <div className="Mobile_homepage_content">
    <h5>frontend developer // san francisco bay area</h5>
    </div>
    );

const Home_content = (
    <div className="Home_content">
    <h2>SHAOWEN YAO</h2>
    <h5>UX + DEV // san francisco bay area</h5>
    </div>
    );

const Home = () => (
        <div>
        {Home_content} 
        {Mobile_homepage_content} 
        </div>
        )

export default Home;