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
    title: 'AP2 Exam Prep',
    emoji: '📚',
    description: (
      <>
        A centralized knowledge base for <b>Fachinformatiker Anwendungsentwicklung</b> exam topics. 
        From IT-Security to Agile workflows, all notes are kept in one place.
      </>
    ),
  },
  {
    title: 'Searchable Docs',
    emoji: '🔍',
    description: (
      <>
        Built with a local search index to find definitions, diagrams, and 
        code snippets instantly.
      </>
    ),
  },
  {
    title: 'Learning by Building',
    emoji: '🏗️',
    description: (
      <>
        The "Docusauru" sandbox: experimenting with <b>Markdown-as-Code</b>, 
        and automated GitHub Pages deployment.
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
