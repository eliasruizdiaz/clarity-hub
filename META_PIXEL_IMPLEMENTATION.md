# Meta Dataset (Pixel) + Conversions API - Implementación Completa

## ✅ Implementado

### 1. Meta Pixel (Client-Side)
- **Dataset ID:** `1509576223444567`
- **Ubicación:** `client/index.html`
- **Eventos automáticos:**
  - `PageView` - Se dispara automáticamente al cargar la página

### 2. Conversions API (Server-Side)
- **Cloudflare Function:** `functions/api/meta-events.ts`
- **Endpoint:** `POST /api/meta-events`
- **Beneficios:**
  - Mejor precisión de tracking (no bloqueado por ad-blockers)
  - Deduplicación automática con eventos del pixel
  - Tracking de IP del servidor (más confiable)

### 3. Eventos Personalizados (Dual Tracking)

Todos los eventos se envían tanto al pixel (client-side) como a la API (server-side) para máxima cobertura y deduplicación.

#### ViewContent
- **Trigger:** Cuando el usuario hace play en el VSL
- **Ubicación:** `client/src/components/VSLPlayer.tsx`
- **Parámetros:**
  - `content_name`: "VSL - Clarity Hub"
  - `content_category`: "Video"
  - `content_type`: "video"

#### Lead
- **Trigger:** Primera interacción con la calculadora ROI
- **Ubicación:** `client/src/components/Calculator.tsx`
- **Parámetros:**
  - `content_name`: "Calculator Interaction"
  - `content_category`: "ROI Calculator"

#### InitiateCheckout
- **Trigger:** Click en cualquier CTA que lleva a Whop
- **Ubicación:** Todos los CTAs en:
  - Header (Desktop + Mobile)
  - Hero Section
  - Problem Section
  - Solution Section
  - Calculator Section
  - FAQ Section
  - CTA Section
- **Parámetros:**
  - `content_name`: "Clarity Hub Premium"
  - `content_category`: "Course"
  - `value`: 297
  - `currency`: "USD"
  - `cta_location`: [ubicación específica del CTA]

### 4. Utilidad de Tracking
- **Archivo:** `client/src/lib/metaTracking.ts`
- **Funciones:**
  - `trackInitiateCheckout(ctaLocation)` - Track checkout events
  - `trackViewContent(contentName, category)` - Track content views
  - `trackLead(contentName, category)` - Track lead generation
  - `trackCustomEvent(eventName, params)` - Track eventos personalizados

## 🔧 Configuración Requerida en Cloudflare Pages

### Variables de Entorno

Ve a tu proyecto en Cloudflare Pages → Settings → Environment Variables y agrega:

```
META_PIXEL_ID=1509576223444567
META_ACCESS_TOKEN=<pegar el token SOLO en Cloudflare → Settings → Environment Variables, nunca en el repo>
```

> ⚠️ **Seguridad:** el token de acceso NO debe vivir en el repositorio. Cargalo únicamente como variable de entorno en Cloudflare Pages. Si alguna vez estuvo commiteado (lo estaba), **rotalo en Meta** (Events Manager → Settings → Conversions API → generar nuevo token) y reemplazá el valor en Cloudflare. Rotarlo invalida el viejo aunque haya quedado en el historial de git.

**Importante:** Agrega estas variables tanto en **Production** como en **Preview** environments.

### Build Configuration

Tu configuración actual ya es correcta:
```
Build command: corepack enable && corepack prepare pnpm@latest --activate && pnpm install && pnpm build
Build output: dist/public
```

## 📊 Cómo Funciona la Deduplicación

1. **Cliente genera evento único:** Cada evento tiene un `event_id` único
2. **Envío dual:** El evento se envía tanto al pixel (browser) como a la API (servidor)
3. **Meta deduplica:** Meta usa el `event_id` + `event_name` para identificar eventos duplicados
4. **Cookies compartidas:** Ambos envíos incluyen `_fbp` y `_fbc` para matching del usuario

## 🧪 Testing

### 1. Test Events en Meta
1. Ve a Events Manager → tu Dataset
2. Click en "Test Events"
3. Abre tu web y realiza acciones (play video, usar calculadora, click CTA)
4. Verifica que los eventos aparezcan en tiempo real

### 2. Verificar Server-Side Events
Abre DevTools → Network y busca llamadas a `/api/meta-events`. Deberías ver:
- Status 200
- Response con `success: true` y `events_received: 1`

### 3. Verificar Deduplicación
En Event Match Quality en Meta, deberías ver:
- **Rate of deduplication:** >50% (significa que pixel y API están funcionando)
- **Event match quality:** >7.0 (buena calidad de matching)

## 🔗 Links de Bio Instagram

Para trackear tráfico desde Instagram, usa estos links con UTM:

```
Link en Bio:
https://clarity.xp.com.py?utm_source=instagram&utm_medium=bio&utm_campaign=profile

Link en DM:
https://clarity.xp.com.py?utm_source=instagram&utm_medium=dm&utm_campaign=direct

Link en Stories:
https://clarity.xp.com.py?utm_source=instagram&utm_medium=story&utm_campaign=story
```

El Meta Pixel capturará automáticamente todo el tráfico y lo asociará al usuario via cookie `_fbp`.

## 🐛 Troubleshooting

### Error: "Missing META_PIXEL_ID or META_ACCESS_TOKEN"
- Verifica que las variables de entorno estén configuradas en Cloudflare Pages
- Asegúrate de hacer un nuevo deploy después de agregar las variables

### Eventos no aparecen en Meta
- Verifica que el Access Token sea válido y no haya expirado
- Revisa la consola del navegador para errores
- Usa Test Events en Meta para debugging en tiempo real

### Baja tasa de deduplicación
- Verifica que ambos eventos (pixel y API) se estén enviando
- Asegúrate de que las cookies `_fbp` y `_fbc` estén presentes
- Revisa que el `event_id` sea el mismo en ambos envíos

## 📈 Métricas a Monitorear

1. **Event Match Quality:** Objetivo >7.0
2. **Rate of Deduplication:** Objetivo >50%
3. **Data Freshness:** Objetivo <5 minutos
4. **Conversions API Coverage:** Objetivo >80%
