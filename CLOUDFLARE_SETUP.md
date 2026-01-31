# Configuración de Cloudflare Pages para Meta Conversions API

## 📋 Pasos para Configurar Variables de Entorno

### 1. Accede a tu proyecto en Cloudflare Pages
1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click en **Pages** en el menú lateral
3. Selecciona tu proyecto **clarity-hub**

### 2. Agrega las Variables de Entorno
1. Click en **Settings** (arriba)
2. Scroll hasta **Environment variables**
3. Click en **Add variable**

### 3. Agrega estas dos variables:

#### Variable 1: META_PIXEL_ID
```
Variable name: META_PIXEL_ID
Value: 1509576223444567
```
- Marca **Production** ✅
- Marca **Preview** ✅
- Click **Save**

#### Variable 2: META_ACCESS_TOKEN
```
Variable name: META_ACCESS_TOKEN
Value: EAAR0IkjYPo0BQlX4n2pwFZBIsFBE7qsgAhSKcy0TIiZBTa7g17Gj2Gf6zvuFId6T0RgfNA0X0RZCjZBRYAbLoVeUqKChH3h7dapKDZABkbRwmEW1XauFQwBljwMlXWt8SlWeaRuy5BbAPTeRhKIQsBf3kUhR887icxp3mf6l1lic338mOK7SuIWZBkasZA6SgZDZD
```
- Marca **Production** ✅
- Marca **Preview** ✅
- Click **Save**

### 4. Redeploy tu Sitio
Después de agregar las variables, necesitas hacer un nuevo deploy:

**Opción A: Trigger Manual**
1. Ve a **Deployments**
2. Click en el último deployment
3. Click en **Retry deployment**

**Opción B: Push a GitHub (Automático)**
- El próximo push a `main` hará un deploy automático con las nuevas variables

## ✅ Verificación

Una vez que el deploy termine:

1. **Abre tu sitio:** https://clarity.xp.com.py
2. **Abre DevTools** (F12)
3. **Ve a Network tab**
4. **Haz click en un CTA** (botón "Acceder al Programa")
5. **Busca la llamada a** `/api/meta-events`
6. **Verifica que el response sea:**
   ```json
   {
     "success": true,
     "events_received": 1,
     "fbtrace_id": "..."
   }
   ```

Si ves ese response, ¡todo está funcionando! 🎉

## 🐛 Si algo falla

### Error: "Missing META_PIXEL_ID or META_ACCESS_TOKEN"
- Verifica que las variables estén en **Production** environment
- Haz un nuevo deploy después de agregar las variables

### Error 401 o 403 de Meta API
- El Access Token puede haber expirado
- Genera un nuevo token en Meta Events Manager
- Actualiza la variable `META_ACCESS_TOKEN` en Cloudflare

### No veo la llamada a /api/meta-events
- Verifica que el deploy haya terminado correctamente
- Limpia caché del navegador (Ctrl+Shift+R)
- Revisa la consola del navegador para errores

## 📊 Monitoreo en Meta

1. Ve a [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu Dataset (ID: 1509576223444567)
3. Click en **Test Events** para ver eventos en tiempo real
4. Verifica **Event Match Quality** (objetivo: >7.0)
5. Verifica **Deduplication Rate** (objetivo: >50%)

## 🔄 Renovar Access Token (cada 60 días)

El Access Token expira cada 60 días. Para renovarlo:

1. Ve a [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu Dataset
3. Click en **Settings** → **Conversions API**
4. Click en **Generate Access Token**
5. Copia el nuevo token
6. Actualiza la variable `META_ACCESS_TOKEN` en Cloudflare Pages
7. Haz un nuevo deploy

---

**¿Necesitas ayuda?** Revisa `META_PIXEL_IMPLEMENTATION.md` para más detalles técnicos.
