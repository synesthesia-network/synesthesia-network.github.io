import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Hero from './hero/hero';

const features = [
  {
    title: 'People First',
    imageUrl: 'img/circle.svg',
    description: (
      <>
        Synesthesia's primary focus is creating indistinguishable web
        experiences atop the blockchain.
      </>
    ),
  },
  {
    title: 'Social Structures',
    imageUrl: 'img/triangle.svg',
    description: (
      <>
        Native social structures and hierarchies will be used to incentivize
        behavior on the network.
      </>
    ),
  },
  {
    title: 'Building Blocks',
    imageUrl: 'img/square.svg',
    description: (
      <>
        Unlike other <a href="https://github.com/paritytech/substrate">Substrate</a> based chains,
        Synesthesia will build unique logic from the ground up.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Hero />
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
