# GitHub User Finder

Live: https://robertkamrowski.github.io/gh_user_finder_react_app/

## Description

This React app allows user to find basic information about a GitHub account depends on user name.
App also lets user switch between day/night mode.

It works with GitHub API : https://docs.github.com/en/rest/reference/users

## How it works

When user type a github username in input and click 'Search', application makes an request to API to fetch user data. If response is ok, then data are provided into App Context, which is used to access data from nested components. If response is not okay (username is not found), then application shows 'No results' components.

## Technologies

This app was written in React with styled components.

## My goals

My goal was to learn how to use AppContext (how to access data from nested components) and ThemeProvider (for toggling theme).
