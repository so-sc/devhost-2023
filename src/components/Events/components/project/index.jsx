"use client";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function index({
  index,
  title,
  name,
  date,
  description,
  link,
  manageModal,
}) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={`${styles.project} md:px-14 lg:px-20 px-7`}
    >
      <div className="pr-5 py-10">
        <h1 className="font-poppinsSB text-3xl">{name}</h1>
        <div className="font-poppinsL text-lg">{date}</div>
        <div className="font-poppinsR text-2xl">{description}</div>
        <div className="font-poppinsR text-lg pt-5">Speaker: {link}</div>
      </div>
      <p>{title}</p>
    </div>
  );
}
