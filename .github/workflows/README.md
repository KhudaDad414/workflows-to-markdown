

 | When Pull Request Target: | opened | ready_for_review, reopened | synchronize, edited | labeled, unlocked, unlabeled | 
| --- | --- | --- | --- | 
| <ul><li>[Automerge release bump PR](#automerge-release-bump-pr)</li><li>[Notify slack](#notify-slack)</li><li>[Lint PR title](#lint-pr-title)</li><li>[Welcome first time contributors](#welcome-first-time-contributors)</li> </ul> |<ul><li>[Automerge release bump PR](#automerge-release-bump-pr)</li><li>[Notify slack](#notify-slack)</li><li>[Lint PR title](#lint-pr-title)</li> </ul> |<ul><li>[Automerge release bump PR](#automerge-release-bump-pr)</li><li>[Lint PR title](#lint-pr-title)</li> </ul> |<ul><li>[Automerge release bump PR](#automerge-release-bump-pr)</li> </ul> |
 | When Issues: | opened | reopened | deleted, unlabeled, labeled, closed | edited | 
| --- | --- | --- | --- | 
| <ul><li>[Deploy to Netlify](#deploy-to-netlify)</li><li>[Notify slack](#notify-slack)</li><li>[Sentiment Analysis](#sentiment-analysis)</li><li>[Welcome first time contributors](#welcome-first-time-contributors)</li> </ul> |<ul><li>[Deploy to Netlify](#deploy-to-netlify)</li><li>[Notify slack](#notify-slack)</li> </ul> |<ul><li>[Deploy to Netlify](#deploy-to-netlify)</li> </ul> |<ul><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |
 | When Push: | master | {} | next, **-release | 
| --- | --- | --- | 
| <ul><li>[Bump package version in dependent repos - if Node project](#bump-package-version-in-dependent-repos---if-node-project)</li><li>[Release - if Node project](#release---if-node-project)</li> </ul> |<ul><li>[autoupdate](#autoupdate)</li> </ul> |<ul><li>[Release - if Node project](#release---if-node-project)</li> </ul> |
 | When Pull Request: | opened | reopened, ready_for_review, synchronize | edited | 
| --- | --- | --- | 
| <ul><li>[PR testing - if Go project](#pr-testing---if-go-project)</li><li>[PR testing - if Node project](#pr-testing---if-node-project)</li><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |<ul><li>[PR testing - if Go project](#pr-testing---if-go-project)</li><li>[PR testing - if Node project](#pr-testing---if-node-project)</li> </ul> |<ul><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |
 | When Pull Request Review: | submitted | edited | 
| --- | --- | 
| <ul><li>[Automerge release bump PR](#automerge-release-bump-pr)</li><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |<ul><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |
 | Schedules: | At 12:00 AM | 
| --- | 
| <ul><li>[Notify on failing automerge](#notify-on-failing-automerge)</li><li>[Manage stale issues and PRs](#manage-stale-issues-and-prs)</li> </ul> |
 | When Release: | published | 
| --- | 
| <ul><li>[Version bump - if Node.js project](#version-bump---if-node.js-project)</li><li>[Announce releases in different channels](#announce-releases-in-different-channels)</li> </ul> |
 | When Discussion: | created | 
| --- | 
| <ul><li>[Notify slack](#notify-slack)</li> </ul> |
 | When Issue Comment: | created, edited | 
| --- | 
| <ul><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |
 | When Pull Request Review Comment: | created, edited | 
| --- | 
| <ul><li>[Sentiment Analysis](#sentiment-analysis)</li> </ul> |## Workflows 
### [Automerge release bump PR](hub/workflows/automerge.yml) 
A short description about the workflow will appear here... 
### [Notify slack](hub/workflows/issues-prs-notifications.yml) 
A short description about the workflow will appear here... 
### [Lint PR title](hub/workflows/lint-pr-title.yml) 
A short description about the workflow will appear here... 
### [Welcome first time contributors](hub/workflows/welcome-first-time-contrib.yml) 
A short description about the workflow will appear here... 
### [Deploy to Netlify](hub/workflows/deploy.yml) 
A short description about the workflow will appear here... 
### [Sentiment Analysis](hub/workflows/sentiment-analysis.yml) 
A short description about the workflow will appear here... 
### [Bump package version in dependent repos - if Node project](hub/workflows/bump.yml) 
A short description about the workflow will appear here... 
### [Release - if Node project](hub/workflows/if-nodejs-release.yml) 
A short description about the workflow will appear here... 
### [autoupdate](hub/workflows/autoupdate.yml) 
A short description about the workflow will appear here... 
### [PR testing - if Go project](hub/workflows/if-go-pr-testing.yml) 
A short description about the workflow will appear here... 
### [PR testing - if Node project](hub/workflows/if-nodejs-pr-testing.yml) 
A short description about the workflow will appear here... 
### [Notify on failing automerge](hub/workflows/automerge-orphans.yml) 
A short description about the workflow will appear here... 
### [Manage stale issues and PRs](hub/workflows/stale-issues-prs.yml) 
A short description about the workflow will appear here... 
### [Version bump - if Node.js project](hub/workflows/if-nodejs-version-bump.yml) 
A short description about the workflow will appear here... 
### [Announce releases in different channels](hub/workflows/release-announcements.yml) 
A short description about the workflow will appear here... 
