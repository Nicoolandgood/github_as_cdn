# Utiliser les pages Github comme CDN

## Étape 1 : créer un dépôt

Créez un dépôt distant sur Github puis clonez-le.
```sh
git clone [lien http ou ssh vers votre dépôt]
```

Ou poussez votre code existant depuis un dépôt local.
```sh
git remote add origin [lien http ou ssh vers votre dépôt].
git push -u origin master
```

Ajoutez un fichier tel qu'un `index.html` à la racine du dossier de votre projet.

## Étape 2 : configurer les pages Github

- Allez dans le `Settings` de votre dépôt sur Github et ensuite allez dans `Pages`. 
- Sélectionnez la branche que vous voulez utiliser pour votre page (par exemple, `master`).
- Appuyez sur `Save`.

Lorsque la page Github sera déployée, allez sur `https://[votrepseudo].github.io/[votredépôt]`.

## Étape 3 : lier les fichiers de votre CDN à vos projets

Disons que nous avons cette structure de fichiers dans notre dépôt : 
```
[votredépôt]
    |_ index.html
    |_ mon_style.css
    |_ mon_script.js
```

Dans d'autres projets, vous pouvez utiliser vos fichiers de style et vos scripts comme tels :

```html
    <!-- pour le css -->
    <link rel="stylesheet" href="https://[votrepseudo].github.io/[votredépôt]/my_style.css">

    <!-- pour le js -->
    <script src="https://[votrepseudo].github.io/[votredépôt]/my_script.js"></script>
```
