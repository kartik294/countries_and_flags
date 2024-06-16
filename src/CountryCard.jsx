
import React from 'react';

const CountryCard = ({name,flagImg,flagAltTxt}) => {
    return (
        <div style={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            padding:"10px",
            margin:"10px",
            border:"1px solid #eee",
            borderRadius:"8px",
            width:"200px",
            height:"200px"
        }}>
            <img src={flagImg} alt={flagAltTxt} style={{width:"100px",height:"100px"}}/>
            <h2>{name}</h2>
        </div>
    );
};

export default CountryCard;
