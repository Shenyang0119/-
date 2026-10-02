const categoryLabels = {
  graduation: '毕业设计实拍作品',
  poster: '产品宣传海报',
  'product-cg': '产品 CG',
  'creative-ad': '创意广告片',
  'stylized-animation': '迪士尼动画风',
  ecommerce: '电商换装视频',
  'bathroom-film': '卫浴情绪感宣传片',
  'logo-motion': 'Logo 动画',
};

// Videos lead the archive; posters are intentionally grouped at the end.
const works = [
  { id: 'bathroom-mood', title: '卫浴情绪宣传片', category: 'bathroom-film', type: 'video', src: './assets/works/bathroom-film/bathroom-mood.mp4', poster: './assets/works/bathroom-film/bathroom-mood.jpg' },
  { id: 'moben-ad-01', title: '墨本创意广告 01', category: 'creative-ad', type: 'video', src: './assets/works/creative-ad/moben-01.mp4', poster: './assets/works/creative-ad/moben-01.jpg' },
  { id: 'moben-ad-02', title: '墨本创意广告 02', category: 'creative-ad', type: 'video', src: './assets/works/creative-ad/moben-02.mp4', poster: './assets/works/creative-ad/moben-02.jpg' },
  { id: 'moben-ad-03', title: '墨本创意广告 03', category: 'creative-ad', type: 'video', src: './assets/works/creative-ad/moben-03.mp4', poster: './assets/works/creative-ad/moben-03.jpg' },
  { id: 'moben-ad-04', title: '墨本创意广告 04', category: 'creative-ad', type: 'video', src: './assets/works/creative-ad/moben-04.mp4', poster: './assets/works/creative-ad/moben-04.jpg' },
  { id: 'graduation-film', title: 'MV《当我在这里》', category: 'graduation', type: 'video', src: './assets/works/graduation/dang-wo-zai-zhe-li.mp4', poster: './assets/works/graduation/dang-wo-zai-zhe-li.jpg' },
  { id: 'exploded-view', title: '产品爆炸效果', category: 'product-cg', type: 'video', src: './assets/works/product-cg/exploded-view.mp4', poster: './assets/works/product-cg/exploded-view.jpg' },
  { id: 'logitech-g502', title: 'Logitech G502 产品 CG', category: 'product-cg', type: 'video', src: './assets/works/product-cg/logitech-g502.mp4', poster: './assets/works/product-cg/logitech-g502.jpg' },
  { id: 'moben-cg', title: '墨本产品 CG 短片', category: 'product-cg', type: 'video', src: './assets/works/product-cg/moben-cg.mp4', poster: './assets/works/product-cg/moben-cg.jpg' },
  { id: 'disney-style', title: '迪士尼动画风格实验', category: 'stylized-animation', type: 'video', src: './assets/works/stylized-animation/disney-style.mp4', poster: './assets/works/stylized-animation/disney-style.jpg' },
  { id: 'ecommerce-driving', title: '电商换装视频 · 开车', category: 'ecommerce', type: 'video', src: './assets/works/ecommerce/driving.mp4', poster: './assets/works/ecommerce/driving.jpg' },
  { id: 'ecommerce-sofa', title: '电商换装视频 · 沙发', category: 'ecommerce', type: 'video', src: './assets/works/ecommerce/sofa.mp4', poster: './assets/works/ecommerce/sofa.jpg' },
  { id: 'logo-motion-01', title: 'Logo 动效 01', category: 'logo-motion', type: 'video', src: './assets/works/logo-motion/logo-motion-01.mp4', poster: './assets/works/logo-motion/logo-motion-01.jpg' },
  { id: 'logo-motion-02', title: 'Logo 动效 02', category: 'logo-motion', type: 'video', src: './assets/works/logo-motion/logo-motion-02.mp4', poster: './assets/works/logo-motion/logo-motion-02.jpg' },
  { id: 'dji-01', title: '大疆概念海报 01', category: 'poster', type: 'image', src: './assets/works/posters/dji-01.jpg' },
  { id: 'dji-02', title: '大疆概念海报 02', category: 'poster', type: 'image', src: './assets/works/posters/dji-02.jpg' },
  { id: 'dji-03', title: '大疆概念海报 03', category: 'poster', type: 'image', src: './assets/works/posters/dji-03.jpg' },
  { id: 'dji-04', title: '大疆概念海报 04', category: 'poster', type: 'image', src: './assets/works/posters/dji-04.jpg' },
  { id: 'dji-05', title: '大疆概念海报 05', category: 'poster', type: 'image', src: './assets/works/posters/dji-05.jpg' },
  { id: 'dji-06', title: '大疆概念海报 06', category: 'poster', type: 'image', src: './assets/works/posters/dji-06.jpg' },
  { id: 'xiaomi-01', title: '小米汽车概念海报 01', category: 'poster', type: 'image', src: './assets/works/posters/xiaomi-01.jpg' },
  { id: 'xiaomi-02', title: '小米汽车概念海报 02', category: 'poster', type: 'image', src: './assets/works/posters/xiaomi-02.jpg' },
  { id: 'xiaomi-03', title: '小米汽车概念海报 03', category: 'poster', type: 'image', src: './assets/works/posters/xiaomi-03.jpg' },
  { id: 'xiaomi-04', title: '小米汽车概念海报 04', category: 'poster', type: 'image', src: './assets/works/posters/xiaomi-04.jpg' },
];

const featured = [
  { id: 'bathroom-mood', index: '01', description: '以克制的光影、材质细节和空间氛围建立卫浴品牌的情绪感。' },
  { id: 'moben-ad-02', index: '02', description: '从创意概念到动态画面，用 AIGC 工作流完成短片视觉表达。' },
  { id: 'logitech-g502', index: '03', description: '以产品结构、质感和运动节奏为核心的 CG 视觉实验。' },
];

const marqueeIds = ['bathroom-mood', 'moben-ad-01', 'moben-ad-02', 'moben-ad-03', 'moben-ad-04', 'graduation-film', 'exploded-view', 'logitech-g502'];
const marqueeWorks = marqueeIds.map((id) => works.find((work) => work.id === id));
const trailWorks = [...marqueeWorks, ...works.filter((work) => work.type === 'image').slice(0, 4)];
const representativePosters = ['dji-01', 'dji-03', 'dji-05', 'xiaomi-01', 'xiaomi-02', 'xiaomi-04'].map((id) => works.find((work) => work.id === id));

const marqueeTrack = document.getElementById('marqueeTrack');
const featuredList = document.getElementById('featuredList');
const archiveGrid = document.getElementById('archiveGrid');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const partnerCard = document.getElementById('partnerCard');
const viewer = document.getElementById('viewer');
const viewerVideo = document.getElementById('viewerVideo');
const viewerImage = document.getElementById('viewerImage');
const viewerTitle = document.getElementById('viewerTitle');
const viewerCategory = document.getElementById('viewerCategory');
const viewerClose = document.querySelector('.viewer-close');
const posterGallery = document.getElementById('posterGallery');
const galleryImage = document.getElementById('galleryImage');
const galleryName = document.getElementById('galleryName');
const galleryCount = document.getElementById('galleryCount');
const galleryThumbs = document.getElementById('galleryThumbs');
const galleryClose = document.querySelector('.gallery-close');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let activeFilter = 'all';
let trailIndex = 0;
let lastTrailTime = 0;
let galleryIndex = 0;

const mediaSource = (work) => work.poster || work.src;

const safePlay = (video) => {
  const playResult = video.play();
  if (playResult && typeof playResult.catch === 'function') playResult.catch(() => {});
};

const dialogIsOpen = (dialog) => Boolean(dialog.open || dialog.hasAttribute('open'));

const showDialog = (dialog) => {
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else {
    dialog.setAttribute('open', '');
    dialog.classList.add('dialog-fallback');
    document.body.classList.add('modal-open');
  }
  requestAnimationFrame(() => dialog.classList.add('is-open'));
};

const hideDialog = (dialog) => {
  if (typeof dialog.close === 'function') dialog.close();
  else {
    dialog.removeAttribute('open');
    dialog.classList.remove('dialog-fallback');
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
  }
};

const createMarqueeCard = (work, duplicate) => {
  const button = document.createElement('button');
  const image = document.createElement('img');
  const label = document.createElement('span');
  button.type = 'button';
  button.className = 'marquee-card';
  button.dataset.workId = work.id;
  button.setAttribute('aria-label', `${work.title}，点击查看`);
  if (duplicate) {
    button.tabIndex = -1;
    button.setAttribute('aria-hidden', 'true');
  }
  image.src = mediaSource(work);
  image.alt = duplicate ? '' : work.title;
  image.loading = duplicate ? 'lazy' : 'eager';
  label.textContent = work.title;
  button.append(image, label);
  return button;
};

const renderMarquee = () => {
  const fragment = document.createDocumentFragment();
  marqueeWorks.forEach((work) => fragment.append(createMarqueeCard(work, false)));
  marqueeWorks.forEach((work) => fragment.append(createMarqueeCard(work, true)));
  marqueeTrack.replaceChildren(fragment);
};

const renderFeatured = () => {
  const fragment = document.createDocumentFragment();
  featured.forEach((item) => {
    const work = works.find((candidate) => candidate.id === item.id);
    const article = document.createElement('article');
    const copy = document.createElement('div');
    const eyebrow = document.createElement('p');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const media = document.createElement('button');
    const video = document.createElement('video');
    const play = document.createElement('span');

    article.className = 'featured-project reveal';
    copy.className = 'featured-copy';
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = `${item.index} · ${categoryLabels[work.category]}`;
    title.textContent = work.title;
    description.textContent = item.description;
    copy.append(eyebrow, title, description);

    media.className = 'featured-media';
    media.type = 'button';
    media.dataset.workId = work.id;
    media.setAttribute('aria-label', `${work.title}，点击播放`);
    video.src = work.src;
    video.poster = work.poster;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    play.textContent = '点击播放';
    media.append(video, play);
    article.append(copy, media);
    fragment.append(article);
  });
  featuredList.replaceChildren(fragment);
};

const createArchiveCard = (work, index, total) => {
  const button = document.createElement('button');
  const image = document.createElement('img');
  const meta = document.createElement('span');
  const title = document.createElement('strong');
  const category = document.createElement('small');
  const type = document.createElement('i');

  button.type = 'button';
  button.className = 'archive-card reveal';
  button.dataset.workId = work.id;
  button.style.setProperty('--delay', `${Math.min(index % 6, 5) * 55}ms`);
  button.setAttribute('aria-label', `${work.title}，${work.type === 'video' ? '点击播放' : '点击查看大图'}`);
  image.src = mediaSource(work);
  image.alt = work.title;
  image.loading = index < 6 ? 'eager' : 'lazy';
  image.decoding = 'async';
  title.textContent = work.title;
  category.textContent = `${categoryLabels[work.category]} · ${String(index + 1).padStart(2, '0')}/${String(total).padStart(2, '0')}`;
  type.textContent = work.type === 'video' ? 'VIDEO' : 'POSTER';
  meta.append(title, category);
  button.append(image, type, meta);
  return button;
};

const createPosterCollection = () => {
  const button = document.createElement('button');
  const stack = document.createElement('span');
  const copy = document.createElement('span');
  const title = document.createElement('strong');
  const detail = document.createElement('small');

  button.type = 'button';
  button.className = 'poster-collection reveal';
  button.dataset.posterCollection = 'true';
  button.setAttribute('aria-label', '代表海报合集，点击逐张查看');
  stack.className = 'poster-stack';
  representativePosters.slice(0, 4).forEach((work, index) => {
    const image = document.createElement('img');
    image.src = work.src;
    image.alt = index === 3 ? '代表海报合集预览' : '';
    image.loading = 'lazy';
    image.style.setProperty('--stack-index', String(index));
    stack.append(image);
  });
  copy.className = 'poster-collection-copy';
  title.textContent = '代表海报合集';
  detail.textContent = `${representativePosters.length} 张精选作品 · 点击逐张查看`;
  copy.append(title, detail);
  button.append(stack, copy);
  return button;
};

const renderArchive = () => {
  const visible = activeFilter === 'image' ? [] : works.filter((work) => work.type === 'video');
  const fragment = document.createDocumentFragment();
  visible.forEach((work, index) => fragment.append(createArchiveCard(work, index, visible.length)));
  if (activeFilter !== 'video') fragment.append(createPosterCollection());
  archiveGrid.replaceChildren(fragment);
  observeReveals(archiveGrid);
};

const updateGallery = () => {
  const work = representativePosters[galleryIndex];
  galleryImage.src = work.src;
  galleryImage.alt = work.title;
  galleryName.textContent = work.title;
  galleryCount.textContent = `${String(galleryIndex + 1).padStart(2, '0')} / ${String(representativePosters.length).padStart(2, '0')}`;
  [...galleryThumbs.children].forEach((thumb, index) => {
    thumb.setAttribute('aria-pressed', String(index === galleryIndex));
  });
};

const openGallery = () => {
  galleryIndex = 0;
  galleryThumbs.replaceChildren(...representativePosters.map((work, index) => {
    const button = document.createElement('button');
    const image = document.createElement('img');
    button.type = 'button';
    button.setAttribute('aria-label', `查看${work.title}`);
    button.setAttribute('aria-pressed', String(index === galleryIndex));
    button.addEventListener('click', () => {
      galleryIndex = index;
      updateGallery();
    });
    image.src = work.src;
    image.alt = '';
    button.append(image);
    return button;
  }));
  updateGallery();
  showDialog(posterGallery);
};

const closeGallery = () => {
  if (!dialogIsOpen(posterGallery)) return;
  posterGallery.classList.remove('is-open');
  window.setTimeout(() => {
    if (dialogIsOpen(posterGallery)) hideDialog(posterGallery);
  }, reducedMotion.matches ? 0 : 240);
};

const openViewer = (work) => {
  viewerTitle.textContent = work.title;
  viewerCategory.textContent = `${categoryLabels[work.category]} · ${work.type === 'video' ? 'VIDEO' : 'POSTER'}`;
  if (work.type === 'video') {
    viewerImage.hidden = true;
    viewerImage.removeAttribute('src');
    viewerVideo.hidden = false;
    viewerVideo.poster = work.poster;
    viewerVideo.src = work.src;
  } else {
    viewerVideo.pause();
    viewerVideo.hidden = true;
    viewerVideo.removeAttribute('src');
    viewerVideo.load();
    viewerImage.hidden = false;
    viewerImage.src = work.src;
    viewerImage.alt = work.title;
  }
  showDialog(viewer);
  if (work.type === 'video') safePlay(viewerVideo);
};

const closeViewer = () => {
  if (!dialogIsOpen(viewer)) return;
  viewer.classList.remove('is-open');
  viewerVideo.pause();
  window.setTimeout(() => {
    if (dialogIsOpen(viewer)) hideDialog(viewer);
    viewerVideo.removeAttribute('src');
    viewerVideo.load();
    viewerImage.removeAttribute('src');
  }, reducedMotion.matches ? 0 : 260);
};

document.addEventListener('click', (event) => {
  const collection = event.target.closest('[data-poster-collection]');
  if (collection) {
    openGallery();
    return;
  }
  const card = event.target.closest('[data-work-id]');
  if (!card) return;
  const work = works.find((item) => item.id === card.dataset.workId);
  if (work) openViewer(work);
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    renderArchive();
  });
});

viewerClose.addEventListener('click', closeViewer);
viewer.addEventListener('click', (event) => {
  if (event.target === viewer) closeViewer();
});
viewer.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeViewer();
});
viewer.addEventListener('close', () => {
  viewer.classList.remove('is-open');
  viewerVideo.pause();
  viewerVideo.removeAttribute('src');
  viewerVideo.load();
  viewerImage.removeAttribute('src');
});

galleryClose.addEventListener('click', closeGallery);
posterGallery.addEventListener('click', (event) => {
  if (event.target === posterGallery) closeGallery();
});
posterGallery.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeGallery();
});
document.querySelectorAll('[data-gallery]').forEach((button) => {
  button.addEventListener('click', () => {
    galleryIndex = button.dataset.gallery === 'next'
      ? (galleryIndex + 1) % representativePosters.length
      : (galleryIndex - 1 + representativePosters.length) % representativePosters.length;
    updateGallery();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (dialogIsOpen(viewer)) closeViewer();
  if (dialogIsOpen(posterGallery)) closeGallery();
});

let revealObserver;
function observeReveals(root = document) {
  const elements = [...root.querySelectorAll('.reveal:not([data-observed])')];
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .1 });
  }
  elements.forEach((element) => {
    element.dataset.observed = 'true';
    revealObserver.observe(element);
  });
}

const videoObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting && !reducedMotion.matches) safePlay(video);
    else video.pause();
  });
}, { threshold: .45 }) : null;

partnerCard.addEventListener('onpointermove' in window ? 'pointermove' : 'mousemove', (event) => {
  if ((event.pointerType && event.pointerType !== 'mouse') || reducedMotion.matches) return;
  const now = performance.now();
  if (now - lastTrailTime < 90) return;
  lastTrailTime = now;
  const rect = partnerCard.getBoundingClientRect();
  const work = trailWorks[trailIndex % trailWorks.length];
  trailIndex += 1;
  const image = document.createElement('img');
  image.className = 'trail-image';
  image.src = mediaSource(work);
  image.alt = '';
  image.style.left = `${event.clientX - rect.left}px`;
  image.style.top = `${event.clientY - rect.top}px`;
  image.style.setProperty('--rotation', `${Math.random() * 20 - 10}deg`);
  partnerCard.append(image);
  image.addEventListener('animationend', () => image.remove(), { once: true });
});

renderMarquee();
renderFeatured();
renderArchive();
observeReveals();
if (videoObserver) {
  document.querySelectorAll('.featured-media video').forEach((video) => videoObserver.observe(video));
}
