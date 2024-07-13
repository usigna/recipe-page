let tl = gsap.timeline();

tl.from('.container', {duration: .6, delay: .2, opacity: 0, scale: 0, ease: 'power1.in'});
tl.from('.image img', {duration: .3, opacity: 0, scale: 0, ease: 'power1.in'});
tl.from('.animate', {duration: .3, opacity: 0, scale: 0, ease: 'power1.in', stagger: .3})