import {onRequest} from "./request";
import {onSchedule} from "./schedule";

addEventListener("fetch", (event) => {
  event.respondWith(onRequest(event.request));
});

addEventListener("scheduled", (event) => {
  event.waitUntil(onSchedule(event));
});
