# Use Github pages as CDN

## Step 1: create a repository

Create a remote repository on Github then clone it.
```sh
git clone [http or ssh link to your repo]
```

Or push your existing code from a local repo.
```sh
git remote add origin [http or ssh link to your repo]
git push -u origin master
```

Add a file such as an `index.html` at the root of your project folder.

## Step 2: set up Github pages

- Go to the `Setting` of your repository on Github and then go to `Pages`. 
- Select the branch you want to use for your page (e.g. `master`).
- Press `Save`.

When the Github page will be deployed, go to `https://[yourusername].github.io/[yourreponame]`.

## Step 3: link files of your CDN to your projects

Let's say we have this file structure in our repository: 
```
    |_  index.html
    |_  my_style.css
    |_  my_script.js
```

In other projects, you can use your styles and scripts as such:

```html
    <!-- for css -->
    <link rel="stylesheet" href="https://[yourusername].github.io/[yourreponame]/my_style.css">

    <!-- for js -->
    <script src="https://[yourusername].github.io/[yourreponame]/my_script.js"></script>
```