# Halfshell Website

This is the website currently located at http://halfshell.ldk.io/.

## Setup

    $ git clone git@github.com:halfshell/website.git
    $ cd website
    $ bundle

## Development

Start `guard` to recompile your changes and `nanoc view` to run the site at http://localhost:3000

## Deployment

Set the deploy targets in nanoc.yaml. You cannot deploy to ldk.io without my private key.

    $ nanoc deploy --target staging # or just `nanoc deploy` for production

Run `nanoc help` or browse the [nanoc documentation](http://nanoc.ws/docs/) for further instructions.
