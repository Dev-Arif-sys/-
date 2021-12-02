import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './config/ParticleConfig';

const ParticleBackground = () => {
    return (
        <div>
            <Particles params={particlesConfig}></Particles>
        </div>
    );
};

export default ParticleBackground;