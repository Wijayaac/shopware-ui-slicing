// const recaptchaKey = '6LfTekcoAAAAAJ5cCv6OmcagFTNi6tG0qvZs37Ea';
export class Recaptcha {
  element = document.createElement("div");
  _load = new Promise((resolve) => {
    window.loadRecaptcha = resolve;
  });

  _validate = null;

  constructor(form) {
    form.append(this.element);
    this.successCallback = (response) => {
      this._resolve && this._resolve(response);
      this._validate = null;
    };
    this.errorCallback = () => {
      this.reset();
      this._reject && this._reject(new Error("Error validating reCAPTCHA"));
      this._validate = null;
    };
  }

  async load() {
    if (this.script) return this._load;
    this.script = document.createElement("script");
    this.script.src = "https://www.google.com/recaptcha/api.js?onload=loadRecaptcha&render=explicit";
    this.script.async = true;
    this.script.defer = true;
    document.head.appendChild(this.script);
    await this._load;
    this.recaptchaId = grecaptcha.render(this.element, {
      sitekey: recaptchaKey,
      size: "invisible",
      callback: this.successCallback,
      "error-callback": this.errorCallback,
    });
  }

  validate() {
    if (!this._validate)
      this._validate = new Promise((resolve, reject) => {
        this._resolve = resolve;
        this._reject = reject;
        grecaptcha.execute(this.recaptchaId);
      });
    return this._validate;
  }

  reset() {
    grecaptcha.reset(this.recaptchaId);
  }
}
