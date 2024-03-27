import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FREE🎉',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        你可以随时查阅这些实验文档，免费！
      </>
    ),
  },
  {
    title: '协助编辑',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        发现错误?现在您只需掌握最基本的Markdown语法便可参与到我们的编辑中来。审核通过后，您的署名将会出现在文档头部。
      </>
    ),
  },
  {
    title: '转载与再次创作',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我们遵循CC-BY-NC-SA 创作协议。 您可以任意地共享、在此基础之上修改。只要您遵守许可协议条款，我们就无法收回你的权利。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
