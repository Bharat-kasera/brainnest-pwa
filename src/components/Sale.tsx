import React from 'react';

type Props = {
  style?: React.CSSProperties;
};

export const Sale: React.FC<Props> = ({style}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 4,
        right: 4,
        height: 18,
        width: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#86D2A5',
        ...style,
      }}
    >
      <span
        style={{
          fontWeight: 400,
          color: 'var(--white-color)',
          fontSize: 12,
          marginTop: 1,
          fontFamily: 'var(--font-league-spartan)',
        }}
      >
        sale
      </span>
    </div>
  );
};
