import { useState } from "react";

import Head from "../src/components/Head";
import Menu from "../src/components/Menu";

import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const RequestMethod = styled.strong`
  display: inline-block;
  padding: 5px 8px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 3px;
  margin-right: 10px;
  font-size: 17px;
  background: rgb(125, 105, 203);
`;

const CopyToClipboardButton = styled(CopyToClipboard)`
  color: #fff;
  background: #333;

  border: none;
  padding: 0.5rem;
  outline: none;
  cursor: pointer;

  position: absolute;
  right: 0;
  top: 0;

  transition: 250ms;
  &:hover {
    color: #fff;
    background: #999;
  }
`;

const EndpointLink = styled.pre`
  padding: 8px;
  background: #e9e9e9;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  overflow-x: auto;
  color: #333;
`;

const JSONCode = styled.code`
  display: block;

  background: #eee;
  text-shadow: 0 1px #fff;
  padding: 0 0.3em;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  color: #333;
`;

const RequestCode = styled.pre`
  border: 1px solid #404040;
  border-top: 0;
  margin: 0;
  white-space: pre-wrap;
  position: relative;

  code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #272822;
    color: #ddd;
  }
`;

const codeOfInformationAllAnimatronics = `async function getInformationOfAllAnimatronics(){
  const endpoint = "https://fnaf-web-git-main-davidlpc1.vercel.app/api/v1/all";
  const data = await fetch(endpoint)
}
`;

export default function Docs() {
  const [texts,setTexts] = useState(["Copy To Clipboard"]);
  return (
    <>
      <Head title="Fnaf API Docs" />
      <Menu />
      <div style={{ padding: 20 }}>
        <h1>Fnaf API Docs</h1>
        <h3>
          <RequestMethod>GET</RequestMethod>
          Information of all animatronics
        </h3>
        <h5>
          Endpoint:{" "}
          <EndpointLink>
            https://fnaf-web-git-main-davidlpc1.vercel.app/api/v1/all
          </EndpointLink>
        </h5>
        <h5>
          Result:
          <pre>
            <JSONCode>
              {JSON.stringify(
                [
                  {
                    name: "Freddy",
                    image:
                      "https://fnaf-web-git-main-davidlpc1.vercel.app/api/v1/image/freddy",
                    game: "Five Nights at Freddy 1",
                  },
                  {
                    name: "Bonnie",
                    image:
                      "https://fnaf-web-git-main-davidlpc1.vercel.app/api/v1/image/bonnie",
                    game: "Five Nights at Freddy 1",
                  },
                  "...",
                ],
                null,
                4
              )}
            </JSONCode>
          </pre>
        </h5>
        <h5>Example request:</h5>
        <RequestCode>
          <code>{codeOfInformationAllAnimatronics}</code>
          <CopyToClipboardButton
            text={codeOfInformationAllAnimatronics}
            onCopy={() => {
              const textsCopy = Array.from(texts);
              if(textsCopy[0] == "Copied") return;
              else textsCopy[0] = "Copied"
              setTexts(textsCopy);
            }}
          >
            <span>{texts[0]}</span>
          </CopyToClipboardButton>
        </RequestCode>
      </div>
    </>
  );
}
