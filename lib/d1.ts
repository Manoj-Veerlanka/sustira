type D1Result = {
  success: boolean;
  errors?: unknown[];
  messages?: unknown[];
  result?: unknown[];
};

export async function executeD1Query(
  sql: string,
  params: unknown[] = []
): Promise<D1Result> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_DATABASE_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !databaseId || !apiToken) {
    throw new Error("Missing Cloudflare D1 environment variables");
  }
console.log("D1 env check:", {
  hasAccountId: Boolean(accountId),
  hasDatabaseId: Boolean(databaseId),
  hasApiToken: Boolean(apiToken),
  accountIdLength: accountId?.length,
  databaseIdLength: databaseId?.length,
  apiTokenLength: apiToken?.length,
});
  const response = await fetch(
    
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql,
        params,
      }),
    }
  );

  const data = (await response.json()) as D1Result;

  if (!response.ok || !data.success) {
    console.error("D1 query failed:", data);
    throw new Error("D1 query failed");
  }

  return data;
}