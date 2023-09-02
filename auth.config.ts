import GitHub from "@auth/core/providers/github";

import type { AuthConfig } from "@auth/core";

import { githubClientId, githubClientSecret } from "./src/env";

export default {
  providers: [
    GitHub({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
} satisfies AuthConfig;
