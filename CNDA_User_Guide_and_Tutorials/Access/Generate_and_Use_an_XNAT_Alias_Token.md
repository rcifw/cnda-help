# Generate and Use an XNAT Alias Token
<style>
/* Prevent default-theme images from floating into the next section */
.theme-default-content img {
  float: none;
  display: block;
  margin: 1em 0;
  max-width: 100%;
  height: auto;
}
</style>
CNDA2 uses [WashU Key](https://it.wustl.edu/items/what-is-a-wustl-key/) for web login. This works only in a browser and cannot be used with tools like XNAT Desktop Client (XDC), scripts, or the REST API.
For those, you must use an **Alias Token**. This is a temporary `alias`/`secret` pair that acts like a username and password.

## Who this applies to
- XNAT Desktop Client (XDC) users
- Scripts using the XNAT REST API (Python, curl, etc.)

## Before you start
- You must have a working WashU Key
- Your CNDA2 account must be active

---

## Create an Alias Token
1. Go to <https://cnda2.wustl.edu> and log in with WashU Key
2. Click your username (top-right)
3. Select **Manage Alias Tokens**
4. Click **Create Alias Token**
5. Click **View** to see:
   - **Alias** (username)
   - **Secret** (password)

Keep these private. Treat them like a username and password.

---

## Use the Token

### XNAT Desktop Client (XDC)
- **Server:** `cnda2.wustl.edu`
- **Username:** alias
- **Password:** secret

### Scripts

**curl:**
```bash
curl -u "$CNDA_ALIAS:$CNDA_SECRET" \
  "https://cnda2.wustl.edu/data/projects?format=json"
```

**Python (XNATpy):**
```python
import os
import xnat

with xnat.connect(
    "https://cnda2.wustl.edu",
    user=os.environ["CNDA_ALIAS"],
    password=os.environ["CNDA_SECRET"],
    extension_types=False,
) as session:
    project = session.projects["MY_PROJECT"]
```

**Note:** Avoid hardcoding credentials in scripts if possible. Use environment variables instead.

---

## Token Lifecycle
- **Tokens expire automatically after 30 days**
- Once expired:
  - They stop working immediately
  - You cannot log in with them
- **To continue access:** Generate a new token and update your XDC connections and scripts

You may delete old tokens from the UI to keep things clean, but this is optional.

---

## Troubleshooting

| Symptom | What to try |
| --- | --- |
| `401 Unauthorized` from the REST API | Token may be expired. Generate a new one. |
| XDC login fails | Make sure you are using `alias` and `secret`, not WashU Key. |
| Script works on one machine but not another | Check for cached or outdated credentials. |

---

## Key takeaway
- Use alias tokens for anything outside the browser
- Expect them to expire every 30 days
- Regenerate when needed
- Contact the **CNDA Help Desk** at cnda-help@wustl.edu if you have questions
