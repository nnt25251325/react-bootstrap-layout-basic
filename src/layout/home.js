import React, { Suspense } from 'react';

import { RouterLoading, MainHeader, MainFooter } from '../components';

export default ({ children }) => {
  return (
    <Suspense fallback={<RouterLoading />}>
      <div className="l-home">
        <MainHeader />

        <div className="main-body py-4">{children}</div>

        <MainFooter />
      </div>
    </Suspense>
  );
};
