import React, {useState} from 'react';
export const AnalyticsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ANALYTICS - Analytics - response time, coverage, gap</h2><p>response time</p></div>
};
export default AnalyticsView;
