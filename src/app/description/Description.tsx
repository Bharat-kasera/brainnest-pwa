import React from 'react';

import {components} from '../../components';

export const Description: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Description'
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: 27, paddingBottom: 20}}
      >
        <h3 style={{marginBottom: 12}}>Coding Robot Toy</h3>
        <p className='t18'>
          Introduce your child to the exciting world of coding with our
          CodeMaster interactive robot toy. Designed to make learning
          programming fun and accessible, this innovative toy offers hands-on
          experience with coding concepts through engaging activities and
          challenges. With intuitive controls and colorful programming blocks,
          children can easily learn to sequence commands, solve puzzles, and
          program the robot to navigate mazes and obstacles.
        </p>
      </main>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#F5FAFB'}}>
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
