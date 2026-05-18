# Generate and Use an XNAT Alias Token

CNDA2 uses [WashU Key](https://it.wustl.edu/items/what-is-a-wustl-key/) for web login. This works only in a browser and cannot be used with tools like XNAT Desktop Client (XDC), scripts, or the REST API. For those, you must use an Alias Token. This is a temporary alias/secret pair that acts like a username and password.

## Who this applies to

- XNAT Desktop Client (XDC) users
- Scripts using the XNAT REST API (Python, curl, etc.)

## Before you start

- Wait until the cutover date
- You must have a working WashU Key
- Your CNDA2 account must be active

## Create an Alias Token

1. Go to [https://cnda2.wustl.edu](https://cnda2.wustl.edu) and log in with WashU Key
2. Click your username in the top-right corner

![Click your username in the top-right corner](/images/alias-token/alias-token-click-username.jpg)

3. Select **Manage Alias Tokens**

![Navigate to Manage Alias Tokens](/images/alias-token/alias-token-manage-page.jpg)

4. Click **Create Alias Token**

![Click Create Alias Token](/images/alias-token/alias-token-create-button.jpg)

5. Your token now appears in the list. Click **View**

![Token appears in the list — click View](/images/alias-token/alias-token-list-view.jpg)

6. Copy the **alias** (username) and **secret** (password) values from the popup

![Copy the alias and secret values](/images/alias-token/alias-token-details-popup.jpg)

Keep these private. Treat them like a username and password.

## Use the Token

### XNAT Desktop Client (XDC)

- **Server:** cnda2.wustl.edu
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

::: tip
Avoid hardcoding credentials in scripts. Use environment variables instead.
:::

## Token Lifecycle

- Tokens expire automatically after 30 days
- Once expired they stop working immediately
- To continue access: generate a new token and update your XDC connections and scripts
- You may delete old tokens from the UI to keep things clean, but this is optional

## Troubleshooting

| Symptom | What to try |
|---|---|
| 401 Unauthorized from the REST API | Token may be expired. Generate a new one. |
| XDC login fails | Make sure you are using alias and secret, not WashU Key. |
| Script works on one machine but not another | Check for cached or outdated credentials. |

## Key Takeaway

- Use alias tokens for anything outside the browser
- Expect them to expire every 30 days
- Regenerate when needed

Contact the CNDA Help Desk at [cnda-help@wustl.edu](mailto:cnda-help@wustl.edu) if you have questions.
