EE.fn.set(3324140310, async function i(t) {
  this.fnPre(t),
    t.c === 1 && (this.st.app.id = t.t1),
    this.fnPost(t, this.st.app.id, 17);
});
EE.fn.set(2332113067, async function i(t) {
  let e = `.e${t.o} {
    color: var(--text-color,black);
    font-family: var(--text-font,Arial);
    font-size: var(--text-size,16px);
  }`;
  EE.rec(t, e);
  let o = EE.de(t, 1, 9, 1, 0.2);
  t.t1 = this.vmIv(t.t1);
  let c = this.rfo(t);
  (t.html = `<div class="${o.cl}" style="text-align:center;width:100%;${o.sty}${o.fs};${c}">${t.t1}</div>`),
    this.out(t);
});
EE.fn.set(4062649834, async function a(e) {
  let t = document.body,
    r;
  if ((e.I1 ? (r = r = this.rit(e.I1)) : e.u1 && (r = e.u1), r)) {
    e.u1 && (r = this.vmIv(e.u1)),
      (t.style.backgroundSize = "cover"),
      (t.style.backgroundPosition = "center"),
      (t.style.backgroundRepeat = "no-repeat"),
      (t.style.backgroundImage = `url(${r})`);
    return;
  }
  let o;
  if (e.radial) o = "radial-gradient(";
  else {
    let c = "to bottom";
    e.horizontal ? (c = "to right") : e.diagonal && (c = "to bottom right"),
      (o = `linear-gradient(${c},`);
  }
  if (e.c4) {
    (t.style.backgroundColor = "transparent"),
      (t.style.backgroundImage = `${o}${e.c1}, ${e.c2},${e.c3},${e.c4},${e.c5})`);
    return;
  }
  if (e.c4) {
    (t.style.backgroundColor = "transparent"),
      (t.style.backgroundImage = `${o}${e.c1}, ${e.c2},${e.c3},${e.c4})`);
    return;
  }
  if (e.c3) {
    (t.style.backgroundColor = "transparent"),
      (t.style.backgroundImage = `${o}${e.c1}, ${e.c2},${e.c3})`);
    return;
  }
  if (e.c2) {
    (t.style.backgroundColor = "transparent"),
      (t.style.backgroundImage = `${o}${e.c1}, ${e.c2})`);
    return;
  }
  EE.setcss("screen-color", e.c1),
    (t.style.background = ""),
    (t.style.backgroundColor = e.c1);
});
EE.fn.set(1247932145, async function o(e) {
  console.log({ s: e });
  let r = EE.de(e, 1, 5, 1.1, 0.2),
    l = EE.sizer(e.s, 1, 5, 100, 30),
    a = EE.sizer(e.s, 1, 5, 6, 2),
    d = `
    .e${e.o} {
      vertical-align: middle;
      cursor: inherit;
      margin:1px;
    }
    `;
  EE.rec(e, d);
  let t = `${r.sty};width:${l}px; height:${l}px`;
  e.circle && (t += ";border-radius:50%;"),
    e.border &&
      (t += `;border-style:solid;border-color:${
        e.c1 || "black"
      };border-width:${a}px;`);
  let c, i;
  if (e.u1)
    (i = this.vmIv(e.u1)),
      (e.html = `<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`);
  else
    switch (e.c) {
      case 1:
        (i = this.rit(e.I1)),
          (e.html = `<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`);
        break;
      case 2:
        break;
      case 3:
        if (((c = this.vmGv(e.R1)), !c))
          return this.terr(`${e.R1} does not have a value!`);
        (i = c.image),
          (e.html = `<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`);
        break;
      case 4:
        if (((c = this.vmGv(e.V1)), !c))
          return this.terr(`${e.V1} does not have a value!`);
        (i = c.image),
          (e.html = `<img id="${e.id}" class="${r.cl}" style="${t}" src="${i}"/></div>`);
        break;
      case 5:
      case 6:
    }
  this.out(e);
});
EE.fn.set(3446399168, async function s(e) {
  switch ((console.log({ s: e }), e.c)) {
    case 1:
      this.st.app.engageversion = "latest";
      return;
    case 2:
      this.st.app.engageversion = "beta";
      return;
    case 3:
      this.st.app.engageversion = "dev";
      return;
    case 4:
      let t = this.vmIv(e.t1);
      if (!t)
        return this.opError(e, `version not cannot be resolved from ${e.t1}`);
      this.st.app.engageversion = t;
      return;
    case 255:
      let n = `${this.st.app.engageversion || ""}(${this.version})`;
      this.fnPost(e, n, 17);
      return;
    default:
      return this.opErr(e, "invalid command");
  }
});
