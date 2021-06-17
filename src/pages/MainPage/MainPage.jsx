import React from 'react';

import WidgetArea from '../../components/WidgetArea';
import GridArea from '../../components/GridArea';

import './MainPageStyles.css';

const MainPage = () => (
  <div className="main-container">
    <WidgetArea />
    <GridArea />
  </div>
);

export default MainPage;
