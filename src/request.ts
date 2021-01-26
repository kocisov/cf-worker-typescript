import {getParams} from "./params";

export async function onRequest(request: Request): Promise<Response> {
  const [resource] = getParams(request);

  const body = JSON.stringify(
    resource === "world" ? {hello: "world"} : {hello: "from worker"}
  );

  return new Response(body, {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  });
}
