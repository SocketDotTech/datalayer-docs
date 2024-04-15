import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Learn from "../../static/svg/learn.svg";
import Build from "../../static/svg/build.svg";
import Earn from "../../static/svg/earn.svg";

import styles from "./index.module.css";

const SectionList = [
  {
    title: "Build",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <> Send your first cross-chain message in less than 5 mins</>,
    buttonLink: "/Build/hello-world",
    buttonIcon: Build,
  },
  {
    title: "Learn",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Learn about Socket's architecture, messaging lifecycle, security, fees &
        more
      </>
    ),
    buttonLink: "/Learn/protocol-design",
    buttonIcon: Learn,
  },

  // {
  //   title: "Surge",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: (
  //     <>
  //       Participate in Surge, Socket's incentivised testnet & become a Sentinel
  //     </>
  //   ),
  //   buttonLink: "https://surge.socket.tech",
  //   buttonIcon: Earn,
  // },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={`${clsx("hero", styles.heroBanner)} text-white`}>
      <div className="container">
        <h1 className="md:text-5xl sm:text-xl">{siteConfig.title}</h1>
        <p className="md:text-xl sm:text-lg">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`It's time to get Plugged into ${siteConfig.title}`}
      description="SocketDL allows you to build protocols that are chain-agnostic via a cross-chain messaging infrastructure <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
