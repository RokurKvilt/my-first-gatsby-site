import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const GamePage = () => {
  return (
    <Layout pageTitle="Scavenger">
      <iframe src="https://i.simmer.io/@Kvilt1/scavenger" title="Scavenger Game" style={{ width: "960px", height: "540px" }}></iframe>
    </Layout>
  );
};

export const Head = () => <Seo title="Scavenger" />;

export default GamePage;
