/**
 * Devuelve el país del visitante (lo calcula Cloudflare por la IP).
 * Lo usa el funnel del Pack 10K para mostrar guaraníes (Bancard) en Paraguay
 * y dólares (Whop) en el resto de los países.
 */
export const onRequest: PagesFunction = async ({ request }) => {
  const country = (request as unknown as { cf?: { country?: string } }).cf?.country ?? null;
  return new Response(JSON.stringify({ country }), {
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
};
