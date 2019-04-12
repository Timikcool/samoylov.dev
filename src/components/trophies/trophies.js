import React, { useState } from "react";
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

const Trophies = () => {
  const cards = [
    {
      title: "Imaguru FinTech Hackathon: Elevator Lab Edition",
      status: "Winner",
      description:
        "Our project is a SaaS solution for every business with call centre. Especially large ones. It analyzes all call records and provides deep analytics about each one based on speech-to-text technology and our cool algorithms.",
      date: "24.03.2019",
      link: "https://imaguru.by/event/fintech-hackathon/",
      images: [fintechTeam19, fintechMe19]
    },
    {
      title: "Imaguru International Blockchainthon",
      status: "2nd place",
      description:
        "We've build decentrilized gambling game for DAO.Casino protocol and at the end we've got 2eth for lottery game based on smart contract deployed to Ethereum testnet",
      date: "07.10.2018",
      link: "https://imaguru.by/event/imaguru-blockchain-hackathon-4/",
      images: [blockchainMe18, blockchainTeam18_2, blockchainTeam18]
    },
    {
      title: "Belarus ICT Start-up Award",
      status: "Finalist (top 15 out of 300)",
      description:
        "The first startup I tried to launch was about sport communities. I tried to build a social platform for team games players and sport organizations to find members, teams, playgrounds and have fun.",
      date: "20.04.2017",
      link: "https://tech.onliner.by/2017/04/20/poxudet",
      images: [ictAwardMe17]
    }
  ];
  return (
    <div className="trophies">
      {cards.map(({ ...props }) => (
        <Card key={props.title} {...props} />
      ))}
    </div>
  );
};
export default Trophies;
