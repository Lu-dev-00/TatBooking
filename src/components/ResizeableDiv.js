import React, { useState, useEffect } from 'react';

export default function ResizeableDiv(props) {
    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    let xScale = props.xScale;
    let minScale = props.timeScale;
    let bookingTime = props.bookingTime;

    useEffect(() => {
        let mins = document.getElementById("mins" + props.id);
        mins.innerHTML = "Mins:" + bookingTime;
        let resizable = document.getElementById('r' + props.id);
        resizable.style.height = `${parseInt((bookingTime / minScale) * xScale)}px`;
    });

    document.body.pointerEvents = 'auto';
    const initial = (e) => {
        let resizable = document.getElementById('r' + props.id);
        setInitialPos(e.clientY);
        setInitialSize(resizable.offsetHeight);
    }

    const initialMob = (e) => {
        let resizable = document.getElementById('r' + props.id);
        document.body.classList.add('stop-scroll');
        setInitialPos(e.touches[0].clientY);
        console.log(e.touches[0].clientY)
        setInitialSize(resizable.offsetHeight); 
    }

    const afterMob = (e) => {
        document.body.classList.remove('stop-scroll');
    }

    const handleTouch = (e) => {
        let resizable = document.getElementById('r' + props.id);
        let mins = document.getElementById("mins" + props.id);
        let newValue = (parseInt(initialSize) + parseInt(e.touches[0].clientY - initialPos - xScale))
        console.log(newValue)
        let newTime = convertToTime(newValue, minScale, xScale );
        if(newTime > 0){
            mins.innerHTML = "Mins:" + newTime;
            resizable.style.height = `${parseInt((newTime / minScale) * xScale)}px`;
            //console.log(parseInt((newTime / minScale) * xScale))
        }
    }

    function roundUpNearest(num, round) {
        return Math.ceil(num / round) * round;
    }

    function convertToTime(num, mins, round) {
        let value = roundUpNearest((num / round), 1) * mins;
        if(value >= mins){
            return value
        }else{
            return 0;
        }
    }
    
    const resize = (e) => {
        let resizable = document.getElementById('r' + props.id);
        let mins = document.getElementById("mins" + props.id);
        let newValue = (parseInt(initialSize) + parseInt(e.clientY - initialPos - xScale))
        console.log(newValue)
        let newTime = convertToTime(newValue, minScale, xScale);
        if(newTime > 0){
            mins.innerHTML = "Mins:" + newTime;
            resizable.style.height = `${parseInt((newTime / minScale) * xScale)}px`;
            //console.log(parseInt((newTime / minScale) * xScale))
        }
    }
    
    return(
        <div className='d-block card'>
            <div className = 'Resizable' id={"r" + props.id}>
                <p id={"mins" + props.id}>Mins: </p>
            </div>
            <div className="Draggable" id = {'d' + props.id}
                draggable   = 'true'
                onDragStart = {initial} 
                onDrag      = {resize}
                onTouchStart = {initialMob}
                onTouchMove = {handleTouch}
                onTouchEnd = {afterMob}
            />
        </div>
    );
}
