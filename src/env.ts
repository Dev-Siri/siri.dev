const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, JSON_BIN_ID, JSON_ACCESS_KEY } = import.meta.env as Record<string, string | undefined>;

export const githubClientId = assertValue(GITHUB_CLIENT_ID, "Missing environment variable: GITHUB_CLIENT_ID");
export const githubClientSecret = assertValue(GITHUB_CLIENT_SECRET, "Missing environment variable: GITHUB_CLIENT_SECRET");
export const jsonBinId = assertValue(JSON_BIN_ID, "Missing environment variable: JSON_BIN_ID");
export const jsonAccessKey = assertValue(JSON_ACCESS_KEY, "Missing environment variable: JSON_ACCESS_KEY");

function assertValue(v: string | undefined, errorMessage: string): string {
  if (v === undefined) throw new Error(errorMessage);

  return v;
}
