if (document.querySelector('.textareaCount')) {
  let textareaBlock = document.querySelectorAll('.textareaCount');

  textareaBlock.forEach(function (element) {
    let textarea = element.querySelector('textarea');
    let charCount = element.querySelector('.char-count');

    textarea.addEventListener('input', function () {
      const maxLength = textarea.getAttribute('maxlength');
      const currentLength = textarea.value.length;

      charCount.textContent = `${currentLength}/${maxLength}`;
    });
  });
}
