"use strict";
var overview = document.getElementById('overview');
var repos = document.getElementById('repos');
var projects = document.getElementById('projects');
var packages = document.getElementById('packages');
var content = document.querySelector('.ov-content');
var repContent = document.querySelector('.rep-content');
var packContent = document.querySelector('.pack-content');
var projectContent = document.querySelector('.project-content');
overview.addEventListener('click', function () {
    content.classList.add('visible');
    repContent.classList.remove('visible');
    projectContent.classList.remove('visible');
    packContent.classList.remove('visible');
    overview.classList.toggle('active');
});
repos.addEventListener('click', function () {
    content.classList.remove('visible');
    repContent.classList.add('visible');
    projectContent.classList.remove('visible');
    packContent.classList.remove('visible');
    repos.classList.toggle('active');
});
packages.addEventListener('click', function () {
    content.classList.remove('visible');
    repContent.classList.remove('visible');
    projectContent.classList.remove('visible');
    packContent.classList.add('visible');
    packages.classList.toggle('active');
});
projects.addEventListener('click', function () {
    content.classList.remove('visible');
    repContent.classList.remove('visible');
    projectContent.classList.add('visible');
    packContent.classList.remove('visible');
    projects.classList.toggle('active');
});
