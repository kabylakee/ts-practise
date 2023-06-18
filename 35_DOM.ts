// 35_DOM.ts
const newBox = document.querySelector('.box') as HTMLElement;
const newInput = document.querySelector('input');
const link = document.querySelector('a');
const p = document.querySelector('.paragraph') as HTMLParagraphElement;
const links = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;

link?.addEventListener('click', (e) => {
    e.preventDefault();
});