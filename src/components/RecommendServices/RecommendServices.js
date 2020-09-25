import React from "react";
import "./RecommendServices.scss";
import SectionDivider from "../SectionDivider/SectionDivider";
import ServiceCard from "../ServiceCards/ServiceCard";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CgMore } from "react-icons/cg";
const RecommendServices = () => {
  return (
    <div className="recommend-services">
      <SectionDivider text="Recommend Services" />
      <ServiceCard icon={<FaPlaneDeparture />} text="Flight" />
      <ServiceCard icon={<FaBed />} text="Hotel" />
      <ServiceCard icon={<FaSuitcase />} text="Job" />
      <ServiceCard icon={<FaTruck />} text="Transport" />
      <ServiceCard icon={<FaRegCalendarCheck />} text="Event" />
      <ServiceCard icon={<CgMore />} text="More" />
    </div>
  );
};

export default RecommendServices;
