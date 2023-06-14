import React, { ReactNode } from 'react';

export interface TimelineItem {
  title: string;
  time: [string, string];
  children: ReactNode;
}

export interface ITimeLineProps {
  title: string;
  icon: ReactNode;
  timeLineItems: TimelineItem[];
}

const TimeLine: React.FC<ITimeLineProps> = props => {
  const { title, icon, timeLineItems } = props;

  return (
    <>
      <h2 className="title title--h3">
        {icon}
        {title}
      </h2>
      <div className="timeline">
        {timeLineItems.map((item, idx) => (
          <article key={idx} className="timeline__item">
            <h5 className="title title--h5 timeline__title">{item.title}</h5>
            <span className="timeline__period">{`${item.time[0]} - ${item.time[1]}`}</span>
            <div className="timeline__description">{item.children}</div>
          </article>
        ))}
      </div>
    </>
  );
};

export default TimeLine;
