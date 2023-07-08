import { jsonAccessKey, jsonBinId } from "../env";

export interface GuestBookEntry {
  username: string;
  createdAt: string;
  comment: string;
}

interface GuestBookResponse {
  record: GuestBookEntry[];
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
    name: string;
  };
}

export async function getGuestbookEntries() {
  const headers = new Headers();
  headers.append("X-Access-Key", jsonAccessKey);

  const response = await fetch(`https://api.jsonbin.io/v3/b/${jsonBinId}`, { headers });
  const guestBookEntries = (await response.json()) as GuestBookResponse;

  return guestBookEntries.record;
}

export async function addGuestBookEntry(entry: GuestBookEntry) {
  const headers = new Headers();
  headers.append("X-Access-Key", jsonAccessKey);
  headers.append("Content-Type", "application/json");

  const existingEntries = await getGuestbookEntries();

  await fetch(`https://api.jsonbin.io/v3/b/${jsonBinId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify([...existingEntries, entry]),
  });
}
