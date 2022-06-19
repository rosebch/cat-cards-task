import { useRef } from 'react';
import './Card.css';

const Card = ({id, topCaption, title, subtitle, desc, img, weight, bottomCaption,selected, disabled, onToggleSelect}) => {

  let styles = 'Card__content';
  if(selected) {
    styles += ' selected'
  } else if (disabled){
    styles += ' disabled'
  }

  let bottomCaptionElem = '';
  if(!selected && !disabled) {
    bottomCaptionElem = <div className="caption">Чего сидишь? Порадуй котэ, <span className="caption--blue"><span onClick={() => onToggleSelect(id)} className="caption--dashed">купи</span>.</span></div>
  } else if (selected && !disabled) {
    bottomCaptionElem = <div className="caption">{bottomCaption}</div>
  } else if (disabled) {
    bottomCaptionElem = <div className="caption" style={{'color': '#FFFF66'}}>Печалька, {subtitle} закончился.</div>
  }

  const refCaption = useRef();
  const refCaptionHovered = useRef();

  let isResizeble = false;

  const onClick = (id) => {
    onToggleSelect(id);
    if(selected) {
      refCaption.current.classList.remove('hovered');
      refCaptionHovered.current.classList.remove('hovered');
    }
  }

  const onMouseLeave = () => {

    if(isResizeble === false && selected) {
      refCaption.current.classList.add('hovered');
      refCaptionHovered.current.classList.add('hovered'); 
      isResizeble = true;
    } 
  }

  const descriptionList = desc?.map((str) => { 

    const arr = str.split(' ');
    const newArr = []
    arr.forEach(word => {
      isNaN(word) ? newArr.push(`${word} `) : newArr.push(<b>{word} </b>)
    });
    
    return <li>{newArr}</li>;
  })

  return (
    <div className='Card'>
        <div className={styles} onClick={() => onClick(id)} onMouseLeave={() => onMouseLeave()}>
            <span ref={refCaption} className='Card__caption'>{topCaption}</span>
            <span ref={refCaptionHovered} className='Card__caption-hovered'>Котэ не одобряет?</span>
            <div>
                <h2 className="Card__title">{title}</h2>
                <span className="Card__subtitle">{subtitle}</span>
            </div>
            <ul className="Card__desc">
              {descriptionList}
            </ul>
            <img src={img} alt="cat" className="Card__img" />
            <div className="Card__circle">
                <span className="Card__weight">{weight}</span>
                <span>кг</span>
            </div>
        </div>
        {bottomCaptionElem}        
    </div>
  )
}

export default Card
