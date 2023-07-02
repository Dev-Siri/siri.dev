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
  headers.append("X-Access-Key", import.meta.env.JSON_ACCESS_KEY!);

  const response = await fetch(`https://api.jsonbin.io/v3/b/${import.meta.env.JSON_BIN_ID}`, { headers });
  const guestBookEntries = (await response.json()) as GuestBookResponse;

  return guestBookEntries.record;
}

export async function addGuestBookEntry(entry: GuestBookEntry) {
  const headers = new Headers();
  headers.append("X-Access-Key", import.meta.env.JSON_ACCESS_KEY!);
  headers.append("Content-Type", "application/json");

  const existingEntries = await getGuestbookEntries();

  await fetch(`https://api.jsonbin.io/v3/b/${import.meta.env.JSON_BIN_ID}`, {
    method: "PUT",
    headers,
    body: JSON.stringify([...existingEntries, entry]),
  });
}
