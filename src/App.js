import React, { Suspense } from 'react';

import './assets/scss/style.scss';

import Layout from './layout';
import Pages from './pages';
import { RouterLoading } from './components';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<RouterLoading />}>
        <Layout>
          <Pages />
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
