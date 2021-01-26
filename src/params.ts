export function getParams(request: Request): Array<string | undefined> {
  const {pathname} = new URL(request.url);
  return pathname.split("/").flatMap((stub) => (stub.length ? stub : []));
}
