import {useEffect, useRef} from 'react';
import './Canvas.css';

function Canvas({props}){
    const ref = useRef()

    const draw = (context) => {

    }

    useEffect(() => {
        const canvas = ref.current
        const context = canvas.getContext('2d')
        draw(context);
    }, [])


    return (
        <div className="canvasContainer">
            <canvas ref={ref} id="canvas" width="500" height="500"></canvas>
        </div>
    )
}

export default Canvas;