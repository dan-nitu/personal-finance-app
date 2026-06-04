import { useMemo } from 'react';

const palette = {
  green: '#277c78',
  yellow: '#f2cdac',
  cyan: '#82c9d7',
  navy: '#626070',
  red: '#c94736',
  purple: '#826cb0',
  purpleLight: '#af81ba',
  turquoise: '#597c7c',
  brown: '#93674f',
  magenta: '#934f6f',
  blue: '#3f82b2',
  navyGrey: '#97a0ac',
  armyGreen: '#7f9161',
  gold: '#cab361',
  orange: '#be6c49',
} as const;

type PaletteKey = keyof typeof palette;

export type DonutItem = {
  value: number;
  color?: PaletteKey;
};

type Props = {
  data: DonutItem[];
  currentAmount: number; // ✅ renamed prop
  strokeWidth?: number;
};

export function DonutChart({ data, currentAmount, strokeWidth = 39 }: Props) {
  const size = 200;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  //  computed limit from data
  const limit = useMemo(() => {
    return data.reduce((sum, d) => sum + d.value, 0);
  }, [data]);

  // fractions based on limit
  const fractions = useMemo(() => {
    return data.map((d) => (limit === 0 ? 0 : d.value / limit));
  }, [data, limit]);

  const offsets = useMemo(() => {
    return fractions.map((_, i) =>
      fractions.slice(0, i).reduce((sum, f) => sum + f * circumference, 0),
    );
  }, [fractions, circumference]);

  const segments = useMemo(() => {
    return data.map((d, i) => {
      const key: PaletteKey =
        d.color ??
        (Object.keys(palette)[i % Object.keys(palette).length] as PaletteKey);

      const fraction = fractions[i];

      return {
        color: palette[key],
        dashArray: `${fraction * circumference} ${circumference}`,
        dashOffset: -offsets[i],
      };
    });
  }, [data, fractions, offsets, circumference]);

  return (
    <div className='donut-chart'>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {segments.map((s, i) => (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill='none'
              stroke={s.color}
              strokeWidth={strokeWidth}
              strokeDasharray={s.dashArray}
              strokeDashoffset={s.dashOffset}
              strokeLinecap='butt'
            />
          ))}
        </g>
      </svg>

      <div className='donut-chart-center'>
        <span className='donut-chart-amount'>${currentAmount}</span>
        <span className='donut-chart-limit'>of ${limit} limit</span>
      </div>
    </div>
  );
}
