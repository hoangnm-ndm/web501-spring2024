const ShowToast = () => {
  return html`
    <button class="btn-m btn-success-m" id="handleClickSuccess">
      Toast success
    </button>
    <button class="btn-m btn-error-m" id="handleClickError">Toast error</button>
    <button class="btn-m btn-warning-m" id="handleClickWarning">
      Toast warn
    </button>
  `;
};

export default ShowToast;
