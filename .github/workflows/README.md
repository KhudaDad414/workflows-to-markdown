## Event-Workflow Map

<table>
<tr>
<th rowspan=2>When Pull Request Target:</th><th>opened </th><th>ready_for_review, reopened </th><th>synchronize, edited </th><th>labeled, unlocked, unlabeled </th></tr>
<tr><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li><li><a href='#welcome-first-time-contributors'>Welcome first time contributors</a></li></ul><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li></ul><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#lint-pr-title'>Lint PR title</a></li></ul><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li></ul></tr><tr>
<th rowspan=2>When Issues:</th><th>opened </th><th>reopened </th><th>deleted, unlabeled, labeled, closed </th><th>edited </th></tr>
<tr><td><ul><li><a href='#deploy-to-netlify'>Deploy to Netlify</a></li><li><a href='#notify-slack'>Notify slack</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li><li><a href='#welcome-first-time-contributors'>Welcome first time contributors</a></li></ul><td><ul><li><a href='#deploy-to-netlify'>Deploy to Netlify</a></li><li><a href='#notify-slack'>Notify slack</a></li></ul><td><ul><li><a href='#deploy-to-netlify'>Deploy to Netlify</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>When Push:</th><th>master </th><th>{} </th><th>next, **-release </th></tr>
<tr><td><ul><li><a href='#bump-package-version-in-dependent-repos---if-node-project'>Bump package version in dependent repos - if Node project</a></li><li><a href='#release---if-node-project'>Release - if Node project</a></li></ul><td><ul><li><a href='#autoupdate'>autoupdate</a></li></ul><td><ul><li><a href='#release---if-node-project'>Release - if Node project</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request:</th><th>opened </th><th>reopened, ready_for_review, synchronize </th><th>edited </th></tr>
<tr><td><ul><li><a href='#pr-testing---if-go-project'>PR testing - if Go project</a></li><li><a href='#pr-testing---if-node-project'>PR testing - if Node project</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#pr-testing---if-go-project'>PR testing - if Go project</a></li><li><a href='#pr-testing---if-node-project'>PR testing - if Node project</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request Review:</th><th>submitted </th><th>edited </th></tr>
<tr><td><ul><li><a href='#automerge-release-bump-pr'>Automerge release bump PR</a></li><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>Schedules:</th><th>At 12:00 AM </th></tr>
<tr><td><ul><li><a href='#notify-on-failing-automerge'>Notify on failing automerge</a></li><li><a href='#manage-stale-issues-and-prs'>Manage stale issues and PRs</a></li></ul></tr><tr>
<th rowspan=2>When Release:</th><th>published </th></tr>
<tr><td><ul><li><a href='#version-bump---if-node.js-project'>Version bump - if Node.js project</a></li><li><a href='#announce-releases-in-different-channels'>Announce releases in different channels</a></li></ul></tr><tr>
<th rowspan=2>When Discussion:</th><th>created </th></tr>
<tr><td><ul><li><a href='#notify-slack'>Notify slack</a></li></ul></tr><tr>
<th rowspan=2>When Issue Comment:</th><th>created, edited </th></tr>
<tr><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr><tr>
<th rowspan=2>When Pull Request Review Comment:</th><th>created, edited </th></tr>
<tr><td><ul><li><a href='#sentiment-analysis'>Sentiment Analysis</a></li></ul></tr></table>

## Workflows 

 | Workflow | Description | 
 | --- | --- | 
| [Automerge release bump PR](hub/workflows/automerge.yml) | A short description about the workflow will appear here... |
| [Notify slack](hub/workflows/issues-prs-notifications.yml) | A short description about the workflow will appear here... |
| [Lint PR title](hub/workflows/lint-pr-title.yml) | A short description about the workflow will appear here... |
| [Welcome first time contributors](hub/workflows/welcome-first-time-contrib.yml) | A short description about the workflow will appear here... |
| [Deploy to Netlify](hub/workflows/deploy.yml) | A short description about the workflow will appear here... |
| [Sentiment Analysis](hub/workflows/sentiment-analysis.yml) | A short description about the workflow will appear here... |
| [Bump package version in dependent repos - if Node project](hub/workflows/bump.yml) | A short description about the workflow will appear here... |
| [Release - if Node project](hub/workflows/if-nodejs-release.yml) | A short description about the workflow will appear here... |
| [autoupdate](hub/workflows/autoupdate.yml) | A short description about the workflow will appear here... |
| [PR testing - if Go project](hub/workflows/if-go-pr-testing.yml) | A short description about the workflow will appear here... |
| [PR testing - if Node project](hub/workflows/if-nodejs-pr-testing.yml) | A short description about the workflow will appear here... |
| [Notify on failing automerge](hub/workflows/automerge-orphans.yml) | A short description about the workflow will appear here... |
| [Manage stale issues and PRs](hub/workflows/stale-issues-prs.yml) | A short description about the workflow will appear here... |
| [Version bump - if Node.js project](hub/workflows/if-nodejs-version-bump.yml) | A short description about the workflow will appear here... |
| [Announce releases in different channels](hub/workflows/release-announcements.yml) | A short description about the workflow will appear here... |
