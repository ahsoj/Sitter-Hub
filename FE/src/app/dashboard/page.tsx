import React from 'react';
import FindJob from './(dashboardComponent)/sitter/Findjob';
import Talent from './(dashboardComponent)/parent/Talent';

type Role = 'Parent' | 'Sitter';

const current_role = 'Parent';

const Dashboard = () => {
  return <>{current_role === 'Parent' ? <Talent /> : <FindJob />}</>;
};

export default Dashboard;
