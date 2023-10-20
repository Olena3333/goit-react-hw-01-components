import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat}>
        {data.map(({ id, label, percentage }) => {
          let color = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <li
              style={{ backgroundColor: `#${color}` }}
              className={css.item}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
