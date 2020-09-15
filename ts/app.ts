const overview = document.getElementById('overview') as HTMLLIElement;
const repos = document.getElementById('repos') as HTMLLIElement;
const projects = document.getElementById('projects') as HTMLLIElement;
const packages = document.getElementById('packages') as HTMLLIElement;

const content = document.querySelector('.ov-content') as HTMLElement;
const repContent = document.querySelector('.rep-content') as HTMLElement;
const packContent = document.querySelector('.pack-content') as HTMLElement;
const projectContent = document.querySelector(
  '.project-content'
) as HTMLElement;

overview.addEventListener('click', () => {
  content.classList.add('visible');
  repContent.classList.remove('visible');
  projectContent.classList.remove('visible');
  packContent.classList.remove('visible');
  overview.classList.toggle('active');
});
repos.addEventListener('click', () => {
  content.classList.remove('visible');
  repContent.classList.add('visible');
  projectContent.classList.remove('visible');
  packContent.classList.remove('visible');
  repos.classList.toggle('active');
});
packages.addEventListener('click', () => {
  content.classList.remove('visible');
  repContent.classList.remove('visible');
  projectContent.classList.remove('visible');
  packContent.classList.add('visible');
  packages.classList.toggle('active');
});
projects.addEventListener('click', () => {
  content.classList.remove('visible');
  repContent.classList.remove('visible');
  projectContent.classList.add('visible');
  packContent.classList.remove('visible');
  projects.classList.toggle('active');
});
