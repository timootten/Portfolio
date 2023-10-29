

export const handle = async ({ event, resolve }) => {
  let theme = event.cookies.get('theme')

  if (theme !== "light" && theme !== "dark") theme = "dark";

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`)
    },
  });
}