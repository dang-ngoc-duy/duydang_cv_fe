import React, { ReactNode } from 'react'

export interface ICardOutlineProps {
    icon: ReactNode;
    title: string;
    content: string;
}

const CardOutline: React.FC<ICardOutlineProps> = (props) => {
    const { icon, title, content } = props
    return (
        <div className="case-item">
            <div style={{width: 'auto'}} className="case-item__icon">{icon}</div>
            <div>
                <h3 className="title title--h4">{title}</h3>
                <p className="case-item__caption">{content}</p>
            </div>
        </div>
    )
}

export default CardOutline
