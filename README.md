# Cloudflare Workers TypeScript Template

## Setup

### Clone/Copy/Generate from the template repo

```bash
wrangler generate <project-name> https://github.com/Kocisov/cf-worker-typescript
# or
git clone https://github.com/Kocisov/cf-worker-typescript.git <project-name>
```

### Configure `wrangler.toml`

```toml
name = "<worker-name>" # (name of your worker -> worker-name.(account).workers.dev)
account_id = "<account-id>" # (https://dash.cloudflare.com > Right side (Workers) > Account ID)
zone_id = "<zone-id>" # (Cloudflare domain ID also found on https://dash.cloudflare.com)
route = "<route>" # (Route for worker (eg. worker-name.(account).workers.dev))
```

### Add KV namespaces to `src/types.d.ts` for TypeScript definitions on global namespace

```ts
declare global {
  // ...
  const KV_STORAGE: KVNamespace;
  // ...
}
```

### Run Worker locally or Deploy

```bash
yarn dev # for local development

yarn publish:dev # for development deployment to *.workers.dev

yarn publish:prod # for production deployment
```
