import React from 'react';

const Menu = ({ items }) => {
    return <div className='section center'>
        {items.map((menuItems) => {
            const { id, title, desc, img, price } = menuItems;
            return <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                    <header>
                        <h3>{title}</h3>
                        <h4 className='price'>₹{price}</h4>
                    </header>
                    <p className='item-text'>{desc}</p>
                </div>



            </article>
        })}
    </div>;
};

export default Menu;
