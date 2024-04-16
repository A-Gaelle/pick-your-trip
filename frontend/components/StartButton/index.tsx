"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import pagesPath from "@config/pagesPath";

import { PageName } from "@utils/enum";

import Button from "@components/Button";

const StartButton = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Button onClick={() => router.push(`${pagesPath[PageName.Start]}`)}>
      {t(`contactButton.label`)}
    </Button>
  );
};

export default StartButton;
