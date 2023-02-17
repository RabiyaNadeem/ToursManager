import React,{useState} from 'react';

function Tour({id,image,info,price,name, removeTour}) {
    const[read,setRead]=useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="single-tour">
                    <h4>{name}</h4>
                    <h4 className="tour-price">$ {price}</h4>
                    <p>{read ? info : `${info.substring(0, 200)}...`}</p>
                    <button onClick={()=>setRead(!read)}>{read ? 'show less' : 'show more'}</button>
                    <button className='delete-btn' onClick={() => removeTour(id)}>Not interested</button>
                </div>
            </footer>
        </article>
        
    );
}

export default Tour;