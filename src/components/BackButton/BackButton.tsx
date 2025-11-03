"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classes from "./BackButton.module.css";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button className={classes.button} onClick={() => router.back()}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </button>
  );
};
