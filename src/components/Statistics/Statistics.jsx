import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat}>
        {data.map(({ id, label, percentage, color }) => (
          <li className={css.item} key={id} color={color}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
