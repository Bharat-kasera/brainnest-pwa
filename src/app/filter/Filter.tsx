'use client';

import {useRouter} from 'next/navigation';
import React, {useState} from 'react';

import {svg} from '../../svg';
import {components} from '../../components';

const colors = [
  '#FFFFFF',
  '#FFE923',
  '#FD8C06',
  '#2DB3FF',
  '#FF452F',
  '#2DD45C',
];

const ageGroups = ['0-12 months', '1-3 years', '3-5 years', '5-12 years'];

const status = ['sale', 'hot', 'new'];

const playTypes = [
  'Imaginative Play',
  'Construction and Building',
  'Cooperative Play',
  'Physical Play',
  'Board Games',
  'Outdoor Play',
];

const tags = [
  'Robotics',
  'Science',
  'Creativity',
  'STEM',
  'Music',
  'Maps',
  'Puzzle',
  'Alphabet',
  'Magnetic',
  'Technology',
];

export const Filter: React.FC = () => {
  const router = useRouter();

  const [selectedTags, setSelectedTags] = useState(tags[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(ageGroups[0]);
  const [selectedPlayType, setSelectedPlayType] = useState(playTypes[0]);

  const renderHeader = () => {
    return (
      <components.Header
        title='Filter'
        showGoBack={true}
      />
    );
  };

  const renderStatus = () => {
    return (
      <section style={{marginBottom: 30}}>
        <ul style={{display: 'flex', gap: 8, alignItems: 'center'}}>
          {status.map((status, index) => {
            return (
              <li
                key={index}
                style={{width: '31%'}}
              >
                <button
                  style={{
                    display: 'flex',
                    gap: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 4,
                  }}
                  onClick={() => setSelectedStatus(status)}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 5,
                      border: '1px solid #C8CDD9',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'var(--white-color)',
                    }}
                  >
                    {selectedStatus === status && <svg.CheckSvg />}
                  </div>
                  <div
                    style={{
                      borderRadius: 12,
                      padding: '2px 8px',
                      display: 'flex',
                      backgroundColor:
                        status === 'new'
                          ? '#15C7FF'
                          : status === 'hot'
                          ? '#FF4768'
                          : '#86D2A5',
                    }}
                  >
                    <span
                      className='t12'
                      style={{
                        color: 'var(--white-color)',
                        lineHeight: 1.5,
                        fontFamily: 'var(--font-league-spartan)',
                      }}
                    >
                      {status}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderColors = () => {
    return (
      <section style={{marginBottom: 40}}>
        <h5 style={{marginBottom: 12}}>Color</h5>
        <ul
          style={{
            display: 'flex',
            gap: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{marginBottom: 10}}
              >
                <button
                  style={{
                    display: 'flex',
                    gap: 8,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: color,
                    borderWidth: 2,
                    borderColor: selectedColor === color ? '#1E2538' : color,
                    borderStyle: 'solid',
                  }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderAgeGroups = () => {
    return (
      <section style={{marginBottom: 40}}>
        <h5 style={{marginBottom: 12}}>Age Group</h5>
        <ul
          style={{
            display: 'flex',
            gap: 8,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {ageGroups.map((ageGroup, index) => {
            return (
              <li
                key={index}
                style={{marginBottom: 10}}
              >
                <button
                  style={{
                    display: 'flex',
                    gap: 8,
                    borderRadius: 50,
                    padding: '8px 18px',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: `1px solid ${
                      selectedAgeGroup === ageGroup ? 'transparent' : '#C8CDD9'
                    }`,
                    backgroundColor:
                      selectedAgeGroup === ageGroup
                        ? 'var(--main-color)'
                        : 'var(--white-color)',
                  }}
                  onClick={() => setSelectedAgeGroup(ageGroup)}
                >
                  <span
                    className='t16'
                    style={{
                      color:
                        selectedAgeGroup === ageGroup
                          ? 'var(--white-color)'
                          : 'var(--main-color)',
                    }}
                  >
                    {ageGroup}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderPlayTypes = () => {
    return (
      <section style={{marginBottom: 40}}>
        <h5 style={{marginBottom: 12}}>Play Type</h5>
        <ul>
          {playTypes.map((playType, index) => {
            return (
              <li
                key={index}
                style={{marginBottom: 10}}
              >
                <button
                  onClick={() => setSelectedPlayType(playType)}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      gap: 6,
                      borderRadius: 5,
                      border: '1px solid #C8CDD9',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--white-color)',
                    }}
                  >
                    {selectedPlayType === playType && <svg.CheckSvg />}
                  </div>
                  <span
                    className='t18'
                    style={{
                      marginTop: 4,
                    }}
                  >
                    {playType}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderTags = () => {
    return (
      <section>
        <h5 style={{marginBottom: 12}}>Tags</h5>
        <ul
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >
          {tags.map((tag, index) => {
            return (
              <li key={index}>
                <button
                  style={{
                    display: 'flex',
                    gap: 8,
                    borderRadius: 50,
                    padding: '8px 18px',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: `1px solid ${
                      selectedTags === tag ? 'transparent' : '#C8CDD9'
                    }`,
                    backgroundColor:
                      selectedTags === tag
                        ? 'var(--main-color)'
                        : 'transparent',
                  }}
                  onClick={() => setSelectedTags(tag)}
                >
                  <span
                    className='t16'
                    style={{
                      color:
                        selectedTags === tag
                          ? 'var(--white-color)'
                          : 'var(--main-color)',
                    }}
                  >
                    {tag}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderButton = () => {
    return (
      <section style={{padding: 20}}>
        <components.Button
          label='apply filters'
          onClick={() => {
            router.back();
          }}
        />
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 16, paddingBottom: 20}}
      >
        {renderStatus()}
        {renderColors()}
        {renderAgeGroups()}
        {renderPlayTypes()}
        {renderTags()}
      </main>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.Screen>
  );
};
