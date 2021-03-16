import React,{useState} from 'react';
import '../styles/Child.css';

const Selection = ({applyColor}) => {
    let [selectionBG, setSelectionBG] = useState({ background: '' })

    // const changeColor = (nextBackground) => {
    //     setSelectionBG({ background: props.nextBackground });
    //   };
   
    return (
    
            <div className="fix-box" style={selectionBG} onClick={()=>{
               applyColor(setSelectionBG)
            }}>
                <h2 className="subheading">Selection</h2>
            </div>
            
    
    );
};

export default Selection;
