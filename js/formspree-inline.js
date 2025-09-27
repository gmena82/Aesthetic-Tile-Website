// js/formspree-inline.js — attaches inline success handler to any form with [data-inline-success]
(function () {
  function bindInlineSuccess(form) {
    if (!form || form.__inlineBound) return; // avoid double binding
    form.__inlineBound = true;

    const successEl = form.querySelector('.fs-success');
    const errorEl = form.querySelector('.fs-error');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (successEl) successEl.style.display = 'none';
      if (errorEl) errorEl.style.display = 'none';
      if (submitBtn) submitBtn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (successEl) successEl.style.display = 'block';
        } else {
          if (errorEl) errorEl.style.display = 'block';
        }
      } catch (_) {
        if (errorEl) errorEl.style.display = 'block';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // Initial bind on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[data-inline-success]').forEach(bindInlineSuccess);
  });
})();
