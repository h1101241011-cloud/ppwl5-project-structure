/* =========================
   UTILS
   Tugas:
    1. Letakkan di file khusus (response.ts), dalam folder yang sesuai, ok
    2. Gunakan export const ...
========================= */

export const htmlResponse = (html: string, status = 200): Response => {
  return new Response(html, {
    status,
    headers: {
      "Content-Type": "text/html",
    },
  });
};

export const redirect = (url: string): Response => {
  return new Response(null, {
    status: 302,
    headers: { 
      Location: url 
    },
  });
};