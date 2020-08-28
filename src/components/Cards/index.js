import React from 'react';
import StarSolid from '../../assets/star-solid.svg';

export default ({ title = '', img = '' }) => (
    <div className="m-5">
        <img 
            width="250"
            height="400"
            style={{
                borderRadius: 30
            }}
            src={img}/>
        <div className="pt-3">
            <span style={{ fontWeight: 500, fontSize: 20 }}>{title}</span>
            <div>
                <img width="10" src={StarSolid} style={{ color: 'yellow' }} />
                <img width="10" src={StarSolid} />
                <img width="10" src={StarSolid} />
            </div>
            <span>4.5</span>
        </div>
    </div>
);