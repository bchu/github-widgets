# GitHub Widgets

A fork of JoelSutherland's [Github-jQuery-Repo-Widget](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget) and dcodeIO's [modified widget](https://github.com/dcodeIO/dcodeio.github.com/blob/master/assets/js/jquery.githubRepoWidget.min.js).

Drop this script on your page and it will build you a beautiful widget that displays the status of your GitHub repo. Requires jQuery.

## What does it look like?

![Widget Image](http://files.www.newmediacampaigns.com/blog/github-widget.png)

## How do I use it?

Everwhere you want a widget to be placed, add the following markup:

	<div class="github-widget" data-repo="bchu/github-widgets"></div>

Then include the javascript file somewhere after you've include jQuery:

	<script type="text/javascript" src="github-widgets.min.js"></script>

That's it! All of the styling is included and image assets are pulled from GitHub.

## Building

1. `npm install` to install grunt modules. `grunt build` to create the minified version of `github-widgets.js`.