# WebsMil

Landing page multilingüe (ES / EN / FI) para vender webs con dashboard para empresas.

## Planes

| Plan | Precio | Ideal para |
|------|--------|------------|
| **Esencial** | 350 € | Autónomos, presencia online + dashboard básico |
| **Profesional** | 700 € | Pymes con CRM, blog y panel admin |
| **Premium** | 1.200 € | Negocios con reservas, automatizaciones e integraciones |

## Stack

- **Next.js 16** + TypeScript + Tailwind CSS
- **Vercel** para deploy
- **Vercel Postgres** para leads en producción (JSON local en desarrollo)
- **Resend** para emails de confirmación (opcional)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige a `/es`.

Idiomas: `/es`, `/en`, `/fi`

## Variables de entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|----------|-------------|
| `POSTGRES_URL` | Conexión Vercel Postgres (producción) |
| `RESEND_API_KEY` | API key de Resend para confirmaciones |
| `RESEND_FROM_EMAIL` | Remitente verificado en Resend |
| `TEAM_NOTIFICATION_EMAIL` | Email donde recibes nuevos leads |
| `ADMIN_SECRET` | Bearer token para `/api/leads/admin` |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio |

Sin `POSTGRES_URL`, los leads se guardan en `.data/leads.json` (local).

## API

### POST `/api/leads`

Guarda un lead y envía confirmación por email.

```json
{
  "email": "cliente@empresa.com",
  "name": "Nombre",
  "company": "Empresa",
  "message": "Mensaje opcional",
  "plan": "professional",
  "locale": "es"
}
```

### GET `/api/leads/admin`

Lista leads (requiere header `Authorization: Bearer {ADMIN_SECRET}`).

## Deploy en Vercel

1. Conecta el repo [github.com/Arroyador69/websmil](https://github.com/Arroyador69/websmil)
2. Añade **Vercel Postgres** desde el dashboard (Storage → Create → Postgres)
3. Configura las variables de entorno
4. Deploy automático en cada push a `main`

## CI

GitHub Actions ejecuta lint + build en cada push y PR a `main`.

## Roadmap

- [ ] Dashboard admin visual para leads
- [ ] Formulario de onboarding → generación automática de web + dashboard
- [ ] Catálogo de plantillas (awesome-dashboards, admin templates)
- [ ] Guía interna de módulos por sector
