import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AP2-Prüfungsvorbereitung',
    emoji: '📚',
    description: (
      <>
        Eine zentrale Wissensdatenbank für Themen der <b>Fachinformatiker Anwendungsentwicklung</b> Prüfung.
        Von IT-Sicherheit bis Agile-Methoden – alle Notizen an einem Ort.
      </>
    ),
  },
  {
    title: 'Durchsuchbare Dokumentation',
    emoji: '🔍',
    description: (
      <>
        Mit einem lokalen Suchindex ausgestattet, um Definitionen, Diagramme und
        Code-Snippets sofort zu finden.
      </>
    ),
  },
  {
    title: 'Lernen durch Bauen',
    emoji: '🏗️',
    description: (
      <>
        Experimentieren mit <b>Docusaurus</b> und 
        automatisiertem GitHub Pages Deployment.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji}>{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
