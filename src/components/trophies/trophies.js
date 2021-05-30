import React from "react";
import ReactGA from "react-ga";
import "react-image-lightbox/style.css";
import Card from "./card";
import "./trophies.scss";
//images
import fintechTeam19 from "./img/imaguru_fintech_19/team.jpg";
import fintechMe19 from "./img/imaguru_fintech_19/me.jpg";
import blockchainMe18 from "./img/imaguru_blockchain_18/me.jpg";
import blockchainTeam18 from "./img/imaguru_blockchain_18/team.jpg";
import blockchainTeam18_2 from "./img/imaguru_blockchain_18/team2.jpg";
import ictAwardMe17 from "./img/ict_startup_award_17/me.jpeg";
import longhashTeam19 from "./img/longhash_berlin_19/team.jpg";
import eap19me from "./img/eap_tbilisi_19/me.jpg";
import eap19team from "./img/eap_tbilisi_19/team.jpg";
import tezos21team from "./img/tezos_hackathon_21/team.jpg";
import tezos21team_2 from "./img/tezos_hackathon_21/team_2.jpg";

const Trophies = () => {
  ReactGA.pageview("/trophies");
  const cards = [
    {
      title: "Tezos DeFi Hackathon",
      status: "2nd place",
      description:
        "A general-purpose NFT marketplace with NFT minting option (via OpenMinter) and a new type of all-pay auctions we called Buttonist Auction. It is an auction–lottery hybrid mechanism where the winner not only gets an NFT but also a share in the auction’s prize pool formed by the bets. Notably, Buttonist Auction can be used not just for commercial purposes such as revenue making or marketing but also as an alternative for a charity auction. Or just for fun.",
      date: "28.02.2021",
      link: "https://hackathon.tezos.org.ua/",
      github: "https://github.com/Timikcool/minter",
      tech: "OpenMinter, Tequito, React, Chakra UI",
      images: [tezos21team, tezos21team_2],
    },
    {
      title: "EaP Civil Society Hackathon Tbilisi",
      status: "Winner",
      description:
        "Provodnik is an app like google maps with ratings for people on wheelchairs and moms with baby carriage to know which places they are good to go and which are not so easy to get in. App includes ratings, smart routes, requests to goverment and more ",
      date: "16.06.2019",
      link: "http://eapcivilsociety.eu/hackathons/hackathon-2019",
      github: "https://provodnik.now.sh",
      tech: "React, Mapbox",
      images: [eap19me, eap19team],
    },
    {
      title: "LongHash Berlin Hackathon vol. 2",
      status: "Winner",
      description:
        "In decentralized exchange, each sliced order must be signed by the user’s private key. This provides a new challenge to algo orders. In order the place orders automatically, while keeping the private key safe, a user typically has to write its own program and run it in its own machine. This makes it difficult for normal users to use algo orders due to the lack of programming skills. We've build a solution that allows a normal user to execute and manage algo orders (TWAP and VWAP).",
      date: "18.05.2019",
      link: "https://hack.longhash.com/#/",
      tech: "React, Electron, Cybex API",
      github: "https://github.com/Timikcool/dex-cybex-algo",
      images: [longhashTeam19],
    },
    {
      title: "Imaguru FinTech Hackathon: Elevator Lab Edition",
      status: "Winner",
      description:
        "Our project is a SaaS solution for every business with call centre. Especially large ones. It analyzes all call records and provides deep analytics about each one based on speech-to-text technology and our cool algorithms.",
      date: "24.03.2019",
      tech: "React, redux-bundler, Google SpeechToText API, Ruby",
      link: "https://imaguru.by/event/fintech-hackathon/",
      images: [fintechTeam19, fintechMe19],
    },
    {
      title: "Imaguru International Blockchainthon",
      status: "2nd place",
      description:
        "We've build decentrilized gambling game for DAO.Casino protocol and at the end we've got 2eth for lottery game based on smart contract deployed to Ethereum testnet",
      date: "07.10.2018",
      link: "https://imaguru.by/event/imaguru-blockchain-hackathon-4/",
      tech: "React, Truffle, DAO.Casino SDK",
      github: "https://github.com/Timikcool/SplitCash",
      images: [blockchainMe18, blockchainTeam18_2, blockchainTeam18],
    },
    {
      title: "Belarus ICT Start-up Award",
      status: "Finalist (top 15 out of 300)",
      description:
        "The first startup I tried to launch was about sport communities. I tried to build a social platform for team games players and sport organizations to find members, teams, playgrounds and have fun.",
      date: "20.04.2017",
      tech: "Java",
      link: "https://tech.onliner.by/2017/04/20/poxudet",
      images: [ictAwardMe17],
    },
  ];
  return (
    <>
      <h1 className="trophies-title">Trophies</h1>
      <div className="trophies">
        {cards.map(({ ...props }) => (
          <Card key={props.title} {...props} />
        ))}
      </div>
    </>
  );
};
export default Trophies;
