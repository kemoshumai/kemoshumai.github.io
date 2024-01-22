"use client";

import { TwitterTweetEmbed } from "react-twitter-embed";

export const Twitter = ({ url }) => {
  const splitted = url.split("/");
  let id =
    splitted[splitted.length - 1] === "/" ||
    splitted[splitted.length - 1] === ""
      ? splitted[splitted.length - 2]
      : splitted[splitted.length - 1];

  id = id.split("?")[0];
  if (!/^\d+$/u.test(id)) {
    return (
      <a
        href={`${url}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {url}
      </a>
    );
  }
  return <TwitterTweetEmbed tweetId={id} />;
};