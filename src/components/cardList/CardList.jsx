import { useState } from 'react';

import Card from '../card/Card';

import photo from '../../assets/images/Photo.svg';
import './CardList.css';

const CardList = () => {

    const [data, setData] = useState({
        cards: [
            {
                id: 1,
                topCaption: 'Сказочное заморское яство',
                title: 'Нямушка',
                subtitle: 'с фуа-гра',
                desc: ['10 порций', 'мышь в подарок'],
                img: photo,
                weight: '0,5',
                bottomCaption: 'Печень утки разварная с артишоками.',
                selected: false,
                disabled: false,
            },
            {
                id: 2,
                topCaption: 'Сказочное заморское яство',
                title: 'Нямушка',
                subtitle: 'с рыбой',
                desc: ['40 порций', '2 мыши в подарок'],
                img: photo,
                weight: '2',
                bottomCaption: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                selected: true,
                disabled: false,
            },
            {
                id: 3,
                topCaption: 'Сказочное заморское яство',
                title: 'Нямушка',
                subtitle: 'с курой',
                desc: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
                img: photo,
                weight: '5',
                bottomCaption: 'Филе из цыплят с трюфелями в бульоне.',
                selected: false,
                disabled: true,
            }
        ]
    })

    const onToggleSelect = (id) => {
        setData(({cards}) => ({
            cards: cards?.map(card => {
                if (card.id === id && !card.disabled) {
                    return {...card, selected: !card.selected}
                } else {
                    return card;
                }
            })
        }));
    }

    const cardList = data.cards?.map(card => {
        const {id, topCaption, title, subtitle, desc, img, weight, bottomCaption, selected, disabled} = card;
        return <Card
                key={id}
                id={id}
                topCaption={topCaption}
                title={title}
                subtitle={subtitle}
                desc={desc}
                img={img}
                weight={weight}
                bottomCaption={bottomCaption}
                selected={selected}
                disabled={disabled}
                onToggleSelect={onToggleSelect}
                />
    })

    return (
       <>
        <h1 className='title'>Ты сегодня покормил кота?</h1>
        <div className='CardList container'>
            {cardList}
        </div>
       </>
    )
}

export default CardList