import React,{useState} from 'react';

const Selection = ({applyColor}) => {
    let [selectionBG, setSelectionBG] = useState({ background: '' })

   
    return (
        <>
            <div className="fix-box" style={selectionBG} onClick={()=>{
                applyColor(setSelectionBG)
            }}>
                <h2 className="subheading">Selection</h2>
            </div>
            
        </>
    );
};

export default Selection;
