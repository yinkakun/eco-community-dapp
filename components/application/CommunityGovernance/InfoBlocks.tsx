import { Block } from "./Block";
import { Row, TokenAmount } from "@ecoinc/ecomponents";
import Image from "next/image";
import EcoLogoWhiteNew from "../../../public/images/eco-logo-white-new.png";
import EcoXLogo from "../../../public/images/ecox-logo.png";
import React from "react";
import { css } from "@emotion/react";
import { useWallet } from "../../../providers";
import { tokensToNumber } from "../../../utilities";

const lineHeight = css({ lineHeight: 1 });

export const InfoBlocks = () => {
  const { ecoTotalSupply, ecoXTotalSupply } = useWallet();
  return (
    <Row gap="xl">
      <Block
        title="ECO SUPPLY"
        content={
          <Row gap="sm" items="center">
            <Image
              alt="Eco Logo"
              src={EcoLogoWhiteNew}
              layout="fixed"
              width={18}
              height={18}
            />
            <TokenAmount
              color="white"
              intVariant="h3"
              decVariant="h3"
              css={lineHeight}
              decimalOptions={{ lightWeight: true }}
              amount={parseInt(tokensToNumber(ecoTotalSupply).toString())}
            />
          </Row>
        }
      />
      <Block
        title="ECOx SUPPLY"
        content={
          <Row gap="sm" items="center">
            <Image
              alt="Ecox Logo"
              src={EcoXLogo}
              layout="fixed"
              width={20}
              height={20}
            />
            <TokenAmount
              color="white"
              intVariant="h3"
              decVariant="h3"
              css={lineHeight}
              decimalOptions={{ lightWeight: true }}
              amount={ecoXTotalSupply}
            />
          </Row>
        }
      />
      <Block
        title="TOTAL VOTING POWER"
        content={
          <TokenAmount
            color="white"
            intVariant="h3"
            decVariant="h3"
            css={lineHeight}
            decimalOptions={{ lightWeight: true }}
            amount={parseInt(
              tokensToNumber(
                ecoXTotalSupply.add(ecoTotalSupply.div(10))
              ).toString()
            )}
          />
        }
      />
    </Row>
  );
};
