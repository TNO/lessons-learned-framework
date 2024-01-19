# Running KEYCLOAK

KEYCLOAK is an Identity Provider, and you can run it simply by using the `docker-compose.yaml` file:

```bash
docker-compose up -d keycloak # In case you don't specify the name, it will also run the l3
```

After logging in as admin, you need to perform the following steps:

- Create the l3 realm (either using the `/export/l3-realm.json` or `realm-l3.json`)
- Create realm roles in l3, i.e. `admin` and `editor`.
- Create realm groups, i.e. `Admins` with role `admin` and `Editors` with role `editor`
- Add users and, optionally, have them join the group of `Admins` or `Editors`

## Exporting settings

In a `Bitnami` image, the user is not root. So if you want to export your settings to a mounted volume `./export`, the user permissions are not correct. [See here for more information](https://stackoverflow.com/a/29251160/319711). However, you can change the local `./export` folder permissions in Linux to match the ones expected inside the container, so we can use the export command (either from outside or inside the container).

```bash
# Identify the current user
docker exec kc id keycloak
# uid=1001(keycloak) gid=1000(keycloak) groups=1000(keycloak)

# Change the owner of the local folder, so the keycloak user inside the container can write to it.
sudo chown -R 1001:1000 export/
# Export the settings
docker exec kc /opt/bitnami/keycloak/bin/kc.sh export --realm l3 --dir /tmp/export --users same_file
```