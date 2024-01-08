import type { Probot, Context } from "probot";
import { IsMessageForApp } from "./lib/is-message-for-app";

export default (app: Probot) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context: Context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });
};
