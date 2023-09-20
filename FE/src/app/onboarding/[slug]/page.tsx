import React from 'react';
import OnboardingSitters from '../(role)/sitters';
import OnboardingParents from '../(role)/parents';

const current_role = 'Parent';

const OnboardingPage = () => {
  return (
    <div className="bg-slate-50">
      {current_role === 'Sitter' ? (
        <OnboardingSitters />
      ) : (
        <OnboardingParents />
      )}
    </div>
  );
};

export default OnboardingPage;
